function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5W4FxB0vebv":
        Script1();
        break;
      case "6pfwvxVPzCw":
        Script2();
        break;
  }
}

function Script1()
{
  window.parent.parent.updatescormstatus(g_oContentResults.strStatus, 1); 
}

function Script2()
{
  window.parent.parent.location.href = window.parent.parent.location.href
}

