using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO
{
    public class DTOStudent
    {
        public DTOStudent()
        {
        }
        public int StudentId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string mail { get; set; }
        public string emergencyPhone1 { get; set; }
        public string emergencyPhone2 { get; set; }

    }
}
