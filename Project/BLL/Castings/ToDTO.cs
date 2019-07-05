using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
namespace BLL
{
    public static class ToDTO
    {
        public static DTOUser DTOUser(User user)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new DTOUser()
                {
                    loginName = user.loginName,
                    password = user.password,
                    UserId = user.UserId,
                    UserTypeId = user.UserTypeId,
                };
            }
        }

        public static DTOBus DTOBus(Bus b)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new DTOBus()
                {
                    accompanierId = b.accompanierId,
                    busDescription = b.busDescription,
                    busId = b.busId,
                    numSeats = b.numSeats
                };
            }
        }
        public static DTOStudent DTOStudent(Student s)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new DTOStudent()
                {
                    firstName = s.firstName,
                    lastName = s.lastName,
                    emergencyPhone1 = s.emergencyPhone1,
                    emergencyPhone2 = s.emergencyPhone2,
                    StudentId = s.StudentId,
                    mail = s.mail,
                };
            }
        }
        public static DTOStudentInBus DTOStudentInBus(StudentInBu s)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new DTOStudentInBus()
                {
                    StudentInBusId = s.StudentInBusId,
                    busId = s.busId,
                    didCome = s.didCome,
                    index = s.index,
                    studentId = s.studentId,
                };
            }
        }

        public static DTOUserType DTOUserType(UserType u)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new DTOUserType()
                {
                    TypeId = u.TypeId,
                    TypeName = u.TypeName
                };
            }
        }

        public static DTOStaion DTOSation(Station s)
        {
            return new DTOStaion()
            {
                StationId=s.StationId,
                StationName=s.StationName,
                lat=s.lat,
                lng=s.lng
            };
        }

        public static DTOPath DTOPath(StudentInBu s)
        {
            using (ModelEntities db = new ModelEntities())
            {
                return new DTOPath()
                {
                   

                };
            }
        }
        public static DTOArrivingChild DTOArrivingChild(StudentInBu s)
        {
            return new DTOArrivingChild()
            {
                StudentId = s.Student.StudentId,
                Name = s.Student.firstName + " " + s.Student.lastName,
                EmergencyPhone1 = s.Student.emergencyPhone1,
                EmergencyPhone2 = s.Student.emergencyPhone2,
                DidCome = false,
                eMail = s.Student.mail
            };
        }
    }
}



