function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'directives/skills-member.html',
        scope: {
            member: '='
        }
    };
}