using System;
using System.Collections.Generic;

namespace SharpShooter
{
	public class MovingBackgroundTile : Drawable
	{
		private double vxAmount;
		private double vyAmount;

		public MovingBackgroundTile( double x, double y, double vxAmount, double vyAmount, object style )
		: base( x, y, style )
		{
			Vx = -vxAmount;
		}
	}
}
