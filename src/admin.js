//-----------------------------------------------------------------------------------------------
//
//
//
//
//
//-----------------------------------------------------------------------------------------------
(function () {
    angular.module('admin', ['admin.service', 'admin.filter', 'admin.component'])
        .config((AjaxProvider, MessageProvider) => {

            //
            // ajax 默认返回处理
            //
            AjaxProvider.setSuccessHandler((result) => result.type == 1 ? result.data : null);
            AjaxProvider.setFailHandler((result) => result.type != 1 ? result.data : null);

            //
            // 通知位置
            //
            MessageProvider.setPosition('bottom', 'right');
        });
})();
