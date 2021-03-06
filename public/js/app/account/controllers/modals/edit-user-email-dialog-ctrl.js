﻿/**
 * [y] hybris Platform
 *
 * Copyright (c) 2000-2015 hybris AG
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of hybris
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with hybris.
 */

(function () {
    'use strict';

    angular.module('ds.account')
        .controller('EditUserEmailDialogCtrl', ['$scope', 'account', 'AccountSvc', '$modalInstance',
            function ($scope, account, AccountSvc, $modalInstance) {

                $scope.account = angular.copy(account);

                $scope.closeEditUserDialog = function () {
                    $modalInstance.dismiss('cancel');
                };

                $scope.updateUserInfo = function () {
                    var account = angular.copy($scope.account);

                    AccountSvc.updateAccount(account).then(function () {
                        $modalInstance.close(account);
                    });
                };

            }]);
})();