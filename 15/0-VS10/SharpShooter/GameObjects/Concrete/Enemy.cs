using System;
using System.Collections.Generic;

namespace SharpShooter
{
	public class Enemy : Collideable
	{
		public Enemy( double x, double y,object style )
			: base( x, y, style )
		{
			Vx = -200;
			Vy = Math.Random() * 200 - 100;
		}

		public static int KillCount = 0; // nincs property jól =(

		public override void AcceptVisitor( ICollideableVisitor v )
		{
			v.VisitEnemy( this );
		}

		public override ICollideableVisitor GetVisitor()
		{
			return new EnemyVisitor( this );
		}

		private int direction = 1;
		public override void Update(int milliseconds)
		{
			Vy += 1 * direction * ( milliseconds / 1000 );
			if( Vy < -100 || Vy > 100  )
				direction *= -1;
		}
	}

	public class EnemyVisitor : EmptyVisitor
	{
		private Enemy parent;

		public EnemyVisitor( Enemy parent )
		{
			this.parent = parent;
		}

		public override void VisitBullet( Bullet b )
		{
			parent.IsDead = true;
			Enemy.KillCount++;
			Enemy newEnemy = new Enemy( Engine.ScreenWidth, Math.Random() * Engine.ScreenHeight, parent.Style );
			newEnemy.Vx *= 1.3;
			Engine.Instance.AddObject( newEnemy );
		}
	}
}
