using System;
using System.Collections.Generic;

namespace SharpShooter
{
	public abstract class Collideable : Drawable
	{
		public Collideable( double x, double y, object style )
			: base( x, y, style )
		{ }

		public virtual void Collide( Collideable other )
		{
			if( other.GetPosition().Intersects( this.GetPosition() ) )
				other.AcceptVisitor( this.GetVisitor() );
		}

		public abstract void AcceptVisitor( ICollideableVisitor v );

		public virtual ICollideableVisitor GetVisitor()
		{
			return new EmptyVisitor();
		}
	}

	public class EmptyVisitor : ICollideableVisitor
	{
		#region ICollideableVisitor Members

		public virtual void VisitBullet( Bullet b )
		{
		}

		public virtual void VisitPlayer( Player p )
		{
		}

		public virtual void VisitEnemy( Enemy e )
		{
		}

		#endregion
	}
}
