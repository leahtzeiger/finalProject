using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DTOUser
    {
        public DTOUser()
        {

        }
        public int UserId { get; set; }
        public string loginName { get; set; }
        public string password { get; set; }
        public int UserTypeId { get; set; }
        public string FirstName { get; set; }
        public string PhoneNumber { get; set; }
        public string LastName { get; set; }

    }
}
