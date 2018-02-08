using System;

namespace SharpShooter
{
	public class Theme
	{
		public string EnemyStyle;
		public string BackgroundStyle1;
		public string BackgroundStyle2;
		public string BackgroundStyle3;
		public string PlayerStyle;
		public string BulletStyle;

		public static Theme Classic;

		public static Theme Current;

		static Theme()
		{
			Classic = new Theme();
			Classic.EnemyStyle = "#DD0000";
			Classic.BackgroundStyle1 = "#666666"; //NOTE: ezt jelenleg ignorálja az engine
			//Classic.BackgroundStyle1 = "#333333";
			Classic.BackgroundStyle2 = "#505050";
			Classic.BackgroundStyle3 = "#404040";
			Classic.PlayerStyle = "white";
			Classic.BulletStyle = "white";

			Current = Classic; //static mezőre nem jó a field initializer
		}
	}
}

