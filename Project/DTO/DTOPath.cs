using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DTOPath
    {
        public int StudentInBusId { get; set; }
        public int? index { get; set; }
        public int StudentId { get; set; }
        public string Name { get; set; }
        public string StudentMail { get; set; }
        public decimal lat { get; set; }
        public decimal lng { get; set; }
        public bool DidCome { get; set; }

     
    }
}
