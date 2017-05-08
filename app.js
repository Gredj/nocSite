function outputAlarmEmail() {
  var form1, serviceOrder, briefDescription, a, b, uponRequest, techResour, form3, refNum, nextSteps;
  form1 = document.getElementById("form1");
  b = document.getElementById("form2");
  form3 = document.getElementById("form3");
  serviceOrder = form1.elements["serviceOrder"].value;
  briefDescription = form1.elements["briefDescription"].value;
  techResour = form3.elements["techResour"].value;
  refNum = form3.elements["refNum"].value;
  nextSteps = form3.elements["nextSteps"].value;
  a = b.elements["priority"].value;

  if (a == "P1 - Critical") {
    uponRequest = "Every 2 hours";
  } else if (a == "P2 - Major") {
    uponRequest = "Every 4 hours";
  } else if (a == "P3 - Minor") {
    uponRequest = "Once per Business day";
  } else {
    uponRequest = "Upon Request";
  }

  document.getElementById("email").innerHTML = "Hello, <br><br>Thank you for being a dedicated customer of Carousel Industries, your business is very much appreciated.  We have received an alarm from your system and created Service Order " + serviceOrder + ".  The following information is specific to your case, please let us know if you have any questions or concerns. <br><br><strong>SO Number:</strong> " + serviceOrder + "<br><strong>Brief Description:</strong> " + briefDescription + "<br><strong>Priority:</strong> " + a + " <br><strong>Communication Objective:</strong> " + uponRequest + " <br> <strong>OEM Case/Reference Number:</strong> " + refNum + "<br><strong>Carousel Technical Resource:</strong> " + techResour + " <br><strong>Status of SO:</strong> Opened <br><strong>Ticket Details/Next Step:</strong> " + nextSteps + "<br><br>We will continue to monitor and track issue and keep you updated on the status of this request while working diligently towards resolving this issue. Please contact us at 1 800-401-0760 opt 3 or reply all if you have any questions or concerns.";


}

function outputServiceEmail() {
  var x, serviceOrder, briefDescription, a, b, uponRequest, form3, refNum;
  x = document.getElementById("form1");
  b = document.getElementById("form2");
  form3 = document.getElementById("form3");
  serviceOrder = x.elements["serviceOrder"].value;
  briefDescription = x.elements["briefDescription"].value;
  refNum = form3.elements["refNum"].value;
  a = b.elements["priority"].value;

  if (a == "P1 - Critical") {
    uponRequest = "Every 2 hours";
  } else if (a == "P2 - Major") {
    uponRequest = "Every 4 hours";
  } else if (a == "P3 - Minor") {
    uponRequest = "Once per Business day";
  } else {
    uponRequest = "Upon Request";
  }

  document.getElementById("serviceEmail").innerHTML = "Hello, <br><br>Thank you for contacting Carousel Industries Support Team. Providing excellent customer service is very important to us. Service Order " + serviceOrder + " has been created for your reference. The following information is specific to your request. Please let us know if you have any additional questions. <br><br><strong>SO Number:</strong> " + serviceOrder + "<br><strong>Brief Description:</strong> " + briefDescription + "<br><strong>Priority:</strong> " + a + " <br><strong>Communication Objective:</strong> " + uponRequest + " <br> <strong>OEM Case/Reference Number:</strong> " + refNum + "<br><strong>Status of SO:</strong> Opened <br><br>Please reference your Service Order in the subject line of any email message(s) that you send to us regarding this service request. <br><br>We will keep you updated on the status of this request and work diligently towards resolving this issue. <br><br>How could we have made this a more positive experience?";

}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
