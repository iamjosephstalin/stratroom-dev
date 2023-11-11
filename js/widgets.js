
            $('.carousel').carousel();

            // profile image upload
            $('.editProfile').on('click', function() {
                $('.profile-default').css('display', 'none');
                $('.editProfile').css('display', 'none');
                $('.profile-replace').css('display', 'block');
            });

            $('.cancelEditProfile').on('click', function() {
                $('.profile-default').css('display', 'block');
                $('.editProfile').css('display', 'block');
                $('.profile-replace').css('display', 'none');
            });

            $("#profileImage").click(function(e) {
                $("#imageUpload").click();
            });

            // reporting Image Upload
            $('#reportingAdd').on('click', function() {
                $('.reporting-default').css('display', 'none');
                $('#reportingAdd').css('display', 'none');
                $('.reporting-replace-add').css('display', 'block');
            });

            $('.canceladdReporting').on('click', function() {
                $('.reporting-default').css('display', 'block');
                $('#reportingAdd').css('display', 'block');
                $('.reporting-replace-add').css('display', 'none');
            });

            $("#reportingImage").click(function(e) {
                $("#reportingImageUpload").click();
            });

            // reporting Image Upload
            $('.reportingEdit').on('click', function() {
                $('.reporting-default').css('display', 'none');
                $('#reportingAdd').css('display', 'none');
                $('.reporting-replace-add').css('display', 'block');
            });

            $('.canceladdReporting').on('click', function() {
                $('.reporting-default').css('display', 'block');
                $('#reportingAdd').css('display', 'block');
                $('.reporting-replace-add').css('display', 'none');
            });

            $("#reportingImage").click(function(e) {
                $("#reportingImageUpload").click();
            });


            $('#directAdd').on('click', function() {
                $('.direct-default').css('display', 'none');
                $('#directAdd').css('display', 'none');
                $('.direct-replace-add').css('display', 'block');
            });

            $('.canceladdReporting').on('click', function() {
                $('.direct-default').css('display', 'block');
                $('#directAdd').css('display', 'block');
                $('.direct-replace-add').css('display', 'none');
            });

            $("#directImage").click(function(e) {
                $("#directImageUpload").click();
            });


            // direct Image Upload
            $('.directEdit').on('click', function() {
                $('.direct-default').css('display', 'none');
                $('#directAdd').css('display', 'none');
                $('.direct-replace-add').css('display', 'block');
            });

            $('.canceladdDirect').on('click', function() {
                $('.direct-default').css('display', 'block');
                $('#directAdd').css('display', 'block');
                $('.direct-replace-add').css('display', 'none');
            });

            $("#directImage").click(function(e) {
                $("#directImageUpload").click();
            });

            $(document).ready(function() {
                $('.editForm').on('click', function() {
                    $('#formsidebar').toggleClass('open');
                    $('#formsidebar').css('display', 'block');
                    $('#formsidebar').css('right', '0px');
                });
            });

            $('.cancelEditScorecard').on('click', function() {
                $('#formsidebar').css('display', 'none');
                $('.overlay').css('display', 'none');
            });

            $('.checkbox').change(function() {
                $('.toggleDiv').toggle(this.checked);
                $('.btn-new-persp').toggle(this.checked);
            }).change();

            $('.switchTable').on('click', function() {
                $('.tableview').css('display', 'block');
                $('.tableview').css('display', '');
                $('.tileview').css('display', 'none');
                $('.switchTable').css('display', 'none');
                $('.switchTile').css('display', 'block');
            });


            $('.switchTile').on('click', function() {
                $('.tileview').css('display', 'block');
                $('.tileview').css('display', '');
                $('.tableview').css('display', 'none');
                $('.switchTile').css('display', 'none');
                $('.switchTable').css('display', 'block');
            });