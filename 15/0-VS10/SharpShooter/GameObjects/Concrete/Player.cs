using System;
using System.Html;
using jQueryApi;

namespace SharpShooter
{
	public class Player : Collideable
	{
		int originalVx = 250;
		int originalVy = 250;

		public static Player Current = null;

		public Player( double x, double y, object style )
			: base( x, y, style )
		{
			Vx = 0;
			Vy = 0;

			Width = 30;
			Height = 40;

			jQuery.Document.Keydown( null, delegate( jQueryEvent e )
				{
					switch( (KeyCodes)e.Which )
					{
						case KeyCodes.left_arrow:
						case KeyCodes.a:
							this.Vx = -originalVx;
							break;
						case KeyCodes.right_arrow:
						case KeyCodes.d:
							this.Vx = originalVx;
							break;
						case KeyCodes.up_arrow:
						case KeyCodes.w:
							this.Vy = -originalVy;
							break;
						case KeyCodes.down_arrow:
						case KeyCodes.s:
							this.Vy = originalVy;
							break;
						case KeyCodes.space:
						case KeyCodes.x:
							isShooting = true;
							break;
					}

				} );
			jQuery.Document.Keyup( null, delegate( jQueryEvent e )
			{
				switch( (KeyCodes)e.Which )
				{
					case KeyCodes.left_arrow:
					case KeyCodes.right_arrow:
					case KeyCodes.a:
					case KeyCodes.d:
						this.Vx = 0;
						break;
					case KeyCodes.up_arrow:
					case KeyCodes.down_arrow:
					case KeyCodes.w:
					case KeyCodes.s:
						this.Vy = 0;
						break;
					case KeyCodes.space:
					case KeyCodes.x:
						isShooting = false;
						break;
				}

			} );
		}

		public override void Move( int milliseconds )
		{
			MovementStrategies.Framed( this, milliseconds );
		}

		public override void Draw( System.Html.Media.Graphics.CanvasContext2D ctx )
		{
			ctx.Save();
			ctx.FillStyle = Style;
			ctx.FillRect( X, Y, Width, Height );
			ctx.FillRect( X, Y - 10, 15, Height + 20 );
			ctx.FillRect( X, Y + 10, Width + 15, Height - 20 );
			ctx.Restore();
		}

		public override void Update( int milliseconds )
		{
			if( coolDown > 0 ) //TODO: legyen ez is időalapú
			{
				coolDown -= milliseconds;
			}
			else if( isShooting )
			{
				Shoot();
			}

		}

		protected int coolDown = 0;
		private bool isShooting = false;
		protected void Shoot()
		{
			if( IsDead )
				return;

			if( coolDown > 0 )
				return;

			double vx = originalVx * 2;
			double vy = 0;

			Engine.Instance.AddObject( new Bullet( X + Width, Y + Height / 2 - 8, vx, vy, Theme.Current.BulletStyle, 2000 ) );

			coolDown = 250;
		}

		public override void AcceptVisitor( ICollideableVisitor v )
		{
			v.VisitPlayer( this );
		}

		public override ICollideableVisitor GetVisitor()
		{
			return new PlayerVisitor( this );
		}
	}

	public class PlayerVisitor : EmptyVisitor
	{
		private Player parent;

		public PlayerVisitor( Player parent )
		{
			this.parent = parent;
		}

		public override void VisitEnemy( Enemy e )
		{
			parent.IsDead = true;
		}
	}
}
