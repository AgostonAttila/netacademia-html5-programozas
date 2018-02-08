using System;
using System.Html;
using System.Html.Media.Graphics;
using System.Collections.Generic;
using jQueryApi;

namespace SharpShooter
{
	public class Engine
	{
		private List<Collideable> objects = new List<Collideable>();
		private List<GameObject> decoration = new List<GameObject>();

		public static Engine Instance = new Engine();

		private CanvasContext2D ctx;
		private Date previousUpdate;

		public static int ScreenWidth = 800;
		public static int ScreenHeight = 600;

		private Engine()
		{

		}

		public void InitializeLoop()
		{
			CanvasElement can = Document.GetElementById( "canvas" ).As<CanvasElement>();
			ctx = (CanvasContext2D)can.GetContext( Rendering.Render2D );

			Window.SetInterval( Tick, 30 );
		}

		private void DrawMessage( string message )
		{
			ctx.Save();
			ctx.Font = "72px MunroRegular";
			ctx.FillStyle = "Black";
			double height = 40; //nincs kedvem általánosra belőni, úgyhogy hardcoded
			double width = ctx.MeasureText( message ).Width;
			TextMetrics measurement = ctx.MeasureText( message );
			ctx.FillRect( Engine.ScreenWidth / 2 - ( width + 20 ) / 2, Engine.ScreenHeight / 2 - height / 2, ( width + 20 ), height );
			ctx.FillStyle = "White";
			ctx.FillText( message, Engine.ScreenWidth / 2 - width / 2, Engine.ScreenHeight / 2 + 14 );
			ctx.Restore();
		}

		public bool IsStarted = false;
		public void Start()
		{
			IsStarted = true;
			previousUpdate = Date.Now;
		}

		private void Tick()
		{
			//ctx.FillStyle = Theme.Current.BackgroundStyle1;
			ctx.FillStyle = "#" + ( 777777 - ( GetCurrentLevel() * 111111 ) ); //olcsó megoldás, tudom

			ctx.FillRect( 0, 0, Engine.ScreenWidth, ScreenHeight );

			objects = objects.Filter( delegate( Collideable g ) { return !g.IsDead; } );

			Date now = Date.Now;
			int ms = IsStarted ? now - previousUpdate : 0;

			previousUpdate = now;
			for( int i = 0; i < decoration.Count; i++ ) //is operátor és castolás lassú: szétszedjük a listákat
			{
				decoration[i].Update( ms );
			}
			for( int i = 0; i < objects.Count; i++ ) //foreach lassú
			{
				objects[i].Update( ms );
			}
			for( int i = 0; i < decoration.Count; i++ )
			{
				decoration[i].Move( ms );
			}
			for( int i = 0; i < objects.Count; i++ )
			{
				objects[i].Move( ms );
			}

			for( int i = 0; i < objects.Count; i++ )
			{
				for( int j = i + 1; j < objects.Count; j++ )
				{
					objects[i].Collide( objects[j] );
					objects[j].Collide( objects[i] );
				}
			}
			for( int i = 0; i < decoration.Count; i++ )
			{
				decoration[i].Draw( ctx );
			}
			for( int i = 0; i < objects.Count; i++ )
			{
				objects[i].Draw( ctx );
			}

			NumberDrawer.Draw( ctx, Engine.ScreenWidth - 30, 30, Enemy.KillCount, Alignment.Right );

			if( !IsStarted )
				DrawMessage( "SHOOT TO START" );
			else if( Player.Current.IsDead )
				DrawMessage( "PRESS [ENTER] TO RETRY" );
		}

		private int GetCurrentLevel()
		{
			int xp = Enemy.KillCount;
			if( xp < 10 )
				return 0;
			else if( xp < 20 )
				return 1;
			else if( xp < 40 )
				return 2;
			else if( xp < 80 )
				return 3;
			else if( xp < 160 )
				return 4;
			else if( xp < 320 )
				return 5;
			else
				return 6;
		}

		public void AddObject( Collideable o )
		{
			objects.Add( o );
		}

		public void AddDecoration( GameObject o )
		{
			decoration.Add( o );
		}
	}
}
