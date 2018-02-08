using System;
using System.Html.Media.Graphics;

namespace SharpShooter
{
	public abstract class GameObject
	{
		public bool IsDead;
		public double X;
		public double Y;
		public double Vx;
		public double Vy;
		public double Width;
		public double Height;

		public Rectangle GetPosition()
		{
			return Rectangle.CreateFromDoubles( X, Y, Width, Height );
		}

		public virtual void Update(int milliseconds)
		{

		}

		public virtual void Move( int milliseconds )
		{
			MovementStrategies.Continuous( this, milliseconds );
		}

		public abstract void Draw( CanvasContext2D ctx );
	}
}
