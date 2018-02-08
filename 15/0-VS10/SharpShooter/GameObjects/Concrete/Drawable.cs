using System;
using System.Collections.Generic;
using System.Linq;

namespace SharpShooter
{
	public class Drawable : GameObject
	{
		public object Style;

		public Drawable(double x, double y, object style)
		{
            Width = 20;
            Height = 20;
			X = x;
			Y = y;
			Vx = 0;
			Vy = 0;
			this.Style = style;
		}

		public override void Draw( System.Html.Media.Graphics.CanvasContext2D ctx )
		{
			ctx.Save();
			ctx.FillStyle = Style;
			ctx.FillRect( X, Y, Width, Height );
			ctx.Restore();
		}
	}
}
