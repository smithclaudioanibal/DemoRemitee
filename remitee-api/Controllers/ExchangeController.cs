using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace remitee_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExchangeController : ControllerBase
    {
       
        private readonly ILogger<ExchangeController> _logger;
        private readonly decimal dollarExchange = 150.0M;
        public ExchangeController(ILogger<ExchangeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public decimal Get()
        {
            return 4.0M;
        }

        [Route("dollarToPeso")]
        [HttpGet]
        public decimal DollarToPeso(decimal dollar)
        {
            return dollar*dollarExchange;
        }

        [Route("pesoToDollar")]
        [HttpGet]
        public object PesoToDollar(decimal peso)
        {
            return new {
                dollar=peso/dollarExchange,
                peso = peso
                };
        }
    }
}
