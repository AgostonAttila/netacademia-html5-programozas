using System;

namespace SharpShooter
{
	public class Bullet : Collideable
	{
		int ttl;
		public Bullet(double x, double y, double vx, double vy, object style, int ttl)
			: base (x, y, style)
		{
			this.Vx = vx;
			this.Vy = vy;

			this.ttl = ttl;

			this.Width = 16;
			this.Height = 16;
		}

		public override void Update( int milliseconds )
		{
			base.Update( milliseconds );
			ttl -= milliseconds;
			if( ttl <= 0 )
			{
				IsDead = true;
			}
		}

		public override void Move(int milliseconds)
		{
			MovementStrategies.Free( this, milliseconds );
		}

		public override ICollideableVisitor GetVisitor()
		{
			return new BulletVisitor( this );
		}

		public override void AcceptVisitor( ICollideableVisitor v )
		{
			v.VisitBullet( this );
		}
	}

	public class BulletVisitor : EmptyVisitor
	{
		private Bullet parent;

		public BulletVisitor( Bullet parent )
		{
			this.parent = parent;
		}

		public override void VisitEnemy( Enemy e )
		{
			parent.IsDead = true;
		}
	}
}
