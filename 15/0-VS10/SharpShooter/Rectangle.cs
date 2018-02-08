using System;
using System.Html;
namespace SharpShooter
{
	public class Rectangle
	{
		public int X;
		public int Y;
		public int Width;
		public int Height;


		public static Rectangle CreateFromDoubles( double x, double y, double width, double height ) // nincs constructor overload (meg függvény se)
		{
			int _x = (int)( 1000 * x );
			int _y = (int)( 1000 * y );
			int _w = (int)( 1000 * width );
			int _h = (int)( 1000 * height );
			return new Rectangle( _x, _y, _w, _h );
		}
		public Rectangle( int x, int y, int width, int height )
		{
			this.X = x;
			this.Y = y;
			this.Width = width;
			this.Height = height;
		}
		public void Offset( int offsetX, int offsetY )
		{
			this.X += offsetX;
			this.Y += offsetY;
		}
		public void Inflate( int horizontalAmount, int verticalAmount )
		{
			this.X -= horizontalAmount;
			this.Y -= verticalAmount;
			this.Width += horizontalAmount * 2;
			this.Height += verticalAmount * 2;
		}
		public bool Contains( int x, int y )
		{
			return this.X <= x && x < this.X + this.Width && this.Y <= y && y < this.Y + this.Height;
		}
		public bool ContainsPoint( Point value )
		{
			return this.X <= value.X && value.X < this.X + this.Width && this.Y <= value.Y && value.Y < this.Y + this.Height;
		}
		public bool ContainsRectangle( Rectangle value )
		{
			return this.X <= value.X && value.X + value.Width <= this.X + this.Width && this.Y <= value.Y && value.Y + value.Height <= this.Y + this.Height;
		}
		public bool Intersects( Rectangle value )
		{
			return value.X < this.X + this.Width && this.X < value.X + value.Width && value.Y < this.Y + this.Height && this.Y < value.Y + value.Height;
		}
		public static Rectangle Intersect( Rectangle value1, Rectangle value2 )
		{
			int num = value1.X + value1.Width;
			int num2 = value2.X + value2.Width;
			int num3 = value1.Y + value1.Height;
			int num4 = value2.Y + value2.Height;
			int num5 = ( value1.X > value2.X ) ? value1.X : value2.X;
			int num6 = ( value1.Y > value2.Y ) ? value1.Y : value2.Y;
			int num7 = ( num < num2 ) ? num : num2;
			int num8 = ( num3 < num4 ) ? num3 : num4;
			Rectangle result = new Rectangle( 0, 0, 0, 0 );
			if( num7 > num5 && num8 > num6 )
			{
				result.X = num5;
				result.Y = num6;
				result.Width = num7 - num5;
				result.Height = num8 - num6;
			}
			else
			{
				result.X = 0;
				result.Y = 0;
				result.Width = 0;
				result.Height = 0;
			}
			return result;
		}

		public static Rectangle Union( Rectangle value1, Rectangle value2 )
		{
			int num = value1.X + value1.Width;
			int num2 = value2.X + value2.Width;
			int num3 = value1.Y + value1.Height;
			int num4 = value2.Y + value2.Height;
			int num5 = ( value1.X < value2.X ) ? value1.X : value2.X;
			int num6 = ( value1.Y < value2.Y ) ? value1.Y : value2.Y;
			int num7 = ( num > num2 ) ? num : num2;
			int num8 = ( num3 > num4 ) ? num3 : num4;
			Rectangle result = new Rectangle( 0, 0, 0, 0 );
			result.X = num5;
			result.Y = num6;
			result.Width = num7 - num5;
			result.Height = num8 - num6;
			return result;
		}

		public bool Equals( Rectangle other ) // overridde-al nem megy (ős objectben nincs...?)
		{
			return this.X == other.X && this.Y == other.Y && this.Width == other.Width && this.Height == other.Height;
		}
	}
}

