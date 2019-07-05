using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL.Castings
{
    public static class ToDAL
    {
        public static User DALUser(DTOUser user)
        {
                return new User()
                {
                    UserId = user.UserId,
                    password = user.password,
                    loginName = user.loginName,
                    UserTypeId = user.UserTypeId,
                    FirstName=user.FirstName,
                    LastName=user.LastName,
                    PhoneNumber=user.PhoneNumber
                };
        }

        public static Bus DALBus(DTOBus b)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new Bus()
                {
                    accompanierId = b.accompanierId,
                    busDescription = b.busDescription,
                    busId = b.busId,
                    StudentInBus = db.StudentInBus.Where(s => s.busId == b.busId).ToList(),
                    numSeats = b.numSeats,
                    User = db.Users.Find(b.accompanierId)
                };
            }
        }
        
        public static Student DALStudent(DTOStudent s)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new Student()
                {
                    firstName = s.firstName,
                    lastName = s.lastName,
                    emergencyPhone1 = s.emergencyPhone1,
                    emergencyPhone2 = s.emergencyPhone2,
                    StudentId = s.StudentId,
                    mail = s.mail,
                    StudentInBus=db.StudentInBus.Where(st=>st.studentId==s.StudentId).ToList(),
                    
                };
            }
        }
        public static StudentInBu DALStudentInBu(DTOStudentInBus st)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new StudentInBu()
                {
                  studentId=st.studentId,
                    busId=st.busId,
                    index=st.index,
                    didCome=st.didCome,
                    StudentInBusId=st.StudentInBusId,
                    Student=db.Students.FirstOrDefault(s=>s.StudentId==st.studentId),
                    Bus=db.Buses.FirstOrDefault(b=>b.busId==st.busId)
                };
            }
        }
        public static UserType DALUserType(DTOUserType u)
        {
                return new UserType()
                {
                    TypeId = u.TypeId,
                    TypeName = u.TypeName
                };
        }

        public static Station DALStaion(DTOStaion st)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new Station()
                {
                   StationId=st.StationId,
                   StationName=st.StationName,
                   lat=st.lat,
                   lng=st.lng,
                   StudentInStations=db.StudentInStations.Where(s=>s.statioId==st.StationId).ToList()
                };
            }
        }
        public static StudentInStation DALStudentInStation(DTOStudentInStaion st)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new StudentInStation()
                {
                   studentInStationId=st.studentInStationId,
                   statioId=st.statoinId,
                   studentId=st.studentId,
                   fromDate=st.fromDate,
                   toDate=st.toDate,
                   Station=db.Stations.Find(st.statoinId),
                   Student=db.Students.Find(st.studentId)
                };
            }
        }
    }
}
 