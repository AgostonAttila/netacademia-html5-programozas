using System;
using System.Collections.Generic;

namespace SharpShooter
{
	public static class MovementStrategies
	{
		public static void Framed( GameObject g, int ms )
		{
			g.X = Math.Min( Math.Max( g.X + g.Vx * ( ms / 1000 ), 0 ), Engine.ScreenWidth - g.Width );
			g.Y = Math.Min( Math.Max( g.Y + g.Vy * ( ms / 1000 ), 0 ), Engine.ScreenHeight - g.Height );
		}

		public static void Continuous( GameObject g, int ms )
		{
			g.X += g.Vx * (ms / 1000);
			g.Y += g.Vy * ( ms / 1000 );
			if( g.X > Engine.ScreenWidth )
				g.X -= Engine.ScreenWidth;
			else if( g.X < -g.Width )
				g.X += Engine.ScreenWidth;
			if( g.Y > Engine.ScreenHeight )
				g.Y -= Engine.ScreenHeight;
			else if( g.Y < -g.Height )
				g.Y += Engine.ScreenHeight;
		}

		public static void Free( GameObject g, int ms )
		{
			g.X += g.Vx * ( ms / 1000 );
			g.Y += g.Vy * ( ms / 1000 );
		}
	}
}
