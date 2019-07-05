using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
namespace DTO
{
    public class DTOArrivingChild
    {
        public int StudentId { get; set; }
        public bool DidCome { get; set; }
        public string Name { get; set; }
        public string EmergencyPhone1 { get; set; }
        public string EmergencyPhone2 { get; set; }
        public string eMail { get; set; }


    }
}
