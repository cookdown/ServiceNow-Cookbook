var impersonatedUserId = "62826bf03710200044e0bfc8bcbe5df1";

gs.print("Starting run as:  " + gs.getUserName() + ", sys_id:" + gs.getUserID());

var callingUser = gs.getSession().impersonate(impersonatedUserId);
gs.print("After impersonation:  " + gs.getUserName() + ", sys_id:" + gs.getUserID());

gs.getSession().impersonate(callingUser);
gs.print("Initial user restored:  " + gs.getUserName() + ", sys_id:" + gs.getUserID());