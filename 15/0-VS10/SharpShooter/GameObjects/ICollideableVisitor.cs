using System;
using System.Collections.Generic;

namespace SharpShooter
{
	public interface ICollideableVisitor
	{
		void VisitBullet( Bullet b );
		void VisitPlayer( Player p );
		void VisitEnemy( Enemy e );
	}
}
