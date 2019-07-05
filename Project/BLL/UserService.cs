using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
//using BLL.Castings;

namespace BLL
{
    public static class UserService
    {
        public static DTOLoginResponse Login(string loginName, string password)
        {
            using (ModelEntities db = new ModelEntities())
            {
                User currentUser = db.Users.FirstOrDefault(u => u.loginName == loginName && u.password == password);
                if (currentUser == null)
                    return new DTOLoginResponse { UserId = 0, userType = 0 };
                return new DTOLoginResponse { UserId = currentUser.UserId, userType = currentUser.UserTypeId };
            }
        }
        public static List<DTOBus> GetaccompanierBus(int accompanierId)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return db.Buses.Where(b => b.accompanierId == accompanierId).ToList().ConvertAll(b => ToDTO.DTOBus(b));
            }
        }

        public static void BusEnded(List<DTOPath> path)
        {
            using (ModelEntities db = new ModelEntities())
            {
                db.StudentInBus.ToList().
                ForEach(s => s.didCome = path.Where(p => p.StudentInBusId == s.StudentInBusId).First().DidCome);
                db.SaveChanges();
            }
        }

        //public static List<DTOArrivingChild> GetChildren(int groupId)
        //{
        //    using (ModelEntities db = new ModelEntities())
        //    {
        //        return db.StudentInBus.Where(s => s.Student.groupId == groupId&&s.didCome==true).ToList().ConvertAll(s => ToDTO.DTOArrivingChild(s));
        //    }
        //}

        public static List<DTOPath> GetPath(int busId)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return db.StudentInBus.Where(s => s.busId == busId).ToList().ConvertAll(s => ToDTO.DTOPath(s));
            }
        }

        public static List<DTOArrivingChild> CheckPresence( List<DTOArrivingChild> children)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return children.Where(s => s.DidCome == false).ToList();
            }
        }

    }
}
