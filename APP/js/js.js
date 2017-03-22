 <script src="//cdn.bootcss.com/jquery/3.0.0/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/snap.svg/0.4.1/snap.svg-min.js"></script>
    <script>
    $(function() {
        var s = Snap('#progress');
        var circle = s.select('#circle');
        var count2 = $('#count2');
        var listLength = $(".list").length;
        var i;
        count2.html("0/" + listLength);
        $(".list").find("input").change(function() {
            i = 0;
            $(".list").each(function() {
                var choose = $(this).find("input:checked").length;
                if (choose) {
                    i += 1;
                };
            });
            var valOld = ((i - 1) / listLength).toFixed(2);
            var val = (i / listLength).toFixed(2);
            count2.html(i + "/" + listLength);
            Snap.animate(valOld * 251.2, val * 251.2, function(val) {
                circle.attr({
                    'stroke-dasharray': val + ',251.2'
                });
            }, 1000);
        });
    });
    </script>