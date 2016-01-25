	public class SingletonB
    {
        #region Declare Param
        private static readonly Lazy<SingletonB> lazy = new Lazy<SingletonB>(() => new SingletonB());
    
        public static SingletonB Instance { get { return lazy.Value; } }

        private SingletonB()
        {
        }
        #endregion

        #region Method
        public string Test()
        {
            return "11111";
        }
        #endregion
    }