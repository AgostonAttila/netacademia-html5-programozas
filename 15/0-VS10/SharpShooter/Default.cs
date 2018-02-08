// Page1.cs
//

using System;
using System.Collections.Generic;
using System.Html;
using System.Runtime.CompilerServices;
using jQueryApi;
using System.Html.Media.Graphics;

namespace SharpShooter
{
	[GlobalMethods]
	internal static class Default
	{

		static Default()
		{
			jQuery.OnDocumentReady( delegate()
			{
				Start();
			} );

			jQuery.Document.Keydown( null, delegate( jQueryEvent e )
				{
					switch( (KeyCodes)e.Which )
					{
						case KeyCodes.enter:
							Window.Open( Window.Document.URL, "_self" );
							break;
						case KeyCodes.space:
						case KeyCodes.x:
							if( !Engine.Instance.IsStarted )
								Engine.Instance.Start();
							break;
					}
				} );
		}

		private static void Start()
		{
			CreateBackground();

			for( int i = 0; i < 10; i++ )
			{
				Engine.Instance.AddObject( new Enemy( 150 + i * 40, i * 50 + 60, Theme.Current.EnemyStyle ) );
			}

			for( int i = 0; i < 10; i++ )
			{
				Engine.Instance.AddObject( new Enemy( 350 + i * 40, i * 50 + 60, Theme.Current.EnemyStyle ) );
			}

			Player.Current = new Player( 60, Engine.ScreenHeight / 2, Theme.Current.PlayerStyle );
			Engine.Instance.AddObject( Player.Current );

			Engine.Instance.InitializeLoop();
		}

		private static void CreateBackground()
		{
			for( int i = 0; i < 9; i++ )
			{
				for( int j = 0; j < 5; j++ )
				{
					MovingBackgroundTile d = new MovingBackgroundTile( j * 150, 520 - i * 100, 200, 200, Theme.Current.BackgroundStyle2 );
					d.Width = 15;
					d.Height = 15;
					Engine.Instance.AddDecoration( d );
				}
			}

			for( int i = 0; i < 9; i++ )
			{
				for( int j = 0; j < 5; j++ )
				{
					Engine.Instance.AddDecoration( new MovingBackgroundTile( j * 100, 525 - i * 100, 350, 350, Theme.Current.BackgroundStyle3 ) );
				}
			}
		}
	}
}
