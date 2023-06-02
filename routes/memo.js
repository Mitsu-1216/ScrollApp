<form action="/modify/task" method="get">
    <input type="hidden" name="modify_taskid" value="<%= default_taskid %>" />
    <input required type="text" name="modify_task" value="<%= default_task %>" placeholder="修正してね" />
    <input required type="date" name="modify_date" value="<%= default_date %>" />
    <input required type="time" name="modify_time" value="<%= default_time %>" />
    <input class="btn btn-info d-grid gap-2 col-3 mx-3 m-3" type="submit" value="修正" />
</form>