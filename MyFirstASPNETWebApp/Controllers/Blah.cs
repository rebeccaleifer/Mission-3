﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Controllers
{
    public class Blah : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult FanMail()
        {
            return View();
        }
    }
}
