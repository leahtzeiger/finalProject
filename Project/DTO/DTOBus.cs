using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class DTOBus
    {
        public DTOBus()
        {

        }
        public int busId { get; set; }
        public string busDescription { get; set; }
        public int accompanierId { get; set; }
        public int numSeats { get; set; }

    }
}