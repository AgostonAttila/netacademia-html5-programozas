using System;
using System.Collections.Generic;
using System.Html.Media.Graphics;

namespace SharpShooter
{
	public static class NumberDrawer
	{
		private static bool[][] empty = new bool[][] //nincs mátrix =(
        {
            new bool[] {false, false, false},
            new bool[] {false, false, false},
            new bool[] {false, false, false},
            new bool[] {false, false, false},
            new bool[] {false, false, false}
        };

		private static bool[][] d0 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {true, false, true},
            new bool[] {true, false, true},
            new bool[] {true, false, true},
            new bool[] {true, true, true}
        };

		private static bool[][] d1 = new bool[][]
        {
            new bool[] {false, false, true},
            new bool[] {false, false, true},
            new bool[] {false, false, true},
            new bool[] {false, false, true},
            new bool[] {false, false, true}
        };

		private static bool[][] d2 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {false, false, true},
            new bool[] {true, true, true},
            new bool[] {true, false, false},
            new bool[] {true, true, true},
        };

		private static bool[][] d3 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {false, false, true},
            new bool[] {true, true, true},
            new bool[] {false, false, true},
            new bool[] {true, true, true},
        };

		private static bool[][] d4 = new bool[][]
        {
            new bool[] {true, false, true},
            new bool[] {true, false, true},
            new bool[] {true, true, true},
            new bool[] {false, false, true},
            new bool[] {false, false, true}
        };

		private static bool[][] d5 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {true, false, false},
            new bool[] {true, true, true},
            new bool[] {false, false, true},
            new bool[] {true, true, true}
        };

		private static bool[][] d6 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {true, false, false},
            new bool[] {true, true, true},
            new bool[] {true, false, true},
            new bool[] {true, true, true}
        };

		private static bool[][] d7 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {false, false, true},
            new bool[] {false, false, true},
            new bool[] {false, false, true},
            new bool[] {false, false, true}
        };

		private static bool[][] d8 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {true, false, true},
            new bool[] {true, true, true},
            new bool[] {true, false, true},
            new bool[] {true, true, true}
        };

		private static bool[][] d9 = new bool[][]
        {
            new bool[] {true, true, true},
            new bool[] {true, false, true},
            new bool[] {true, true, true},
            new bool[] {false, false, true},
            new bool[] {true, true, true}
        };

		public static int PixelWidth = 10;
		public static int PixelHeight = 10;

		public static void Draw( CanvasContext2D ctx, double x, double y, int number, Alignment align )
		{
			ctx.Save();
			ctx.FillStyle = "white";

			List<int> digits = GetDigits( number );

			switch( align )
			{
				case Alignment.Right:
					ctx.Translate( -( digits.Count * 3 + digits.Count - 1 ) * PixelWidth, 0 );
					break;
				case Alignment.Center:
					//TODO
					break;
			}

			int offset = 0;
			foreach( int digit in digits )
			{
				bool[][] pattern = GetPattern( digit );
				DrawDigit( ctx, x + offset, y, pattern );
				offset += PixelWidth * ( pattern[0].Length + 1 );
			}
			ctx.Restore();
		}

		private static void DrawDigit( CanvasContext2D ctx, double x, double y, bool[][] pattern )
		{
			ctx.Save();
			ctx.Translate( x, y );
			for( int i = 0; i < pattern.Length; i++ )
			{
				for( int j = 0; j < pattern[i].Length; j++ )
				{
					if( pattern[i][j] )
						ctx.FillRect( PixelWidth * j, PixelHeight * i, PixelWidth, PixelHeight );
				}
			}
			ctx.Restore();
		}

		private static bool[][] GetPattern( int number )
		{
			switch( number )
			{
				case 0:
					return d0;
				case 1:
					return d1;
				case 2:
					return d2;
				case 3:
					return d3;
				case 4:
					return d4;
				case 5:
					return d5;
				case 6:
					return d6;
				case 7:
					return d7;
				case 8:
					return d8;
				case 9:
					return d9;
				default:
					return empty;
			}
		}

		private static List<int> GetDigits( int number ) // nincs yield return (és érthetlen a hibaüzenet, ami a tünete) =(
		{
			List<int> result = new List<int>();
			if( number == 0 )
			{
				result.Insert( 0, 0 );
			}
			else
			{
				while( number > 0 )
				{
					int digit = number % 10;
					result.Insert( 0, digit );
					number = Math.Floor( number / 10 ); //nem egészosztás történik, hiába intek, mert JS osztásra fordul => típusbiztosság kikerülhető!
				}

			}
			return result;
		}
	}
}
