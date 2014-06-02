'use strict';

(function () {

    var hsquiz = angular.module('hsQuiz', []);

    hsquiz.controller('QuizController', function() {
        this.questions = [
            "I seem to be aware of subtleties in my environment.",
            "Other people's moods affect me.",
            "I tend to be very sensitive to pain.",
            "I find myself needing to withdraw during busy days, into bed or in a darkened room or any place where I can have some privacy and relief from stimulation.",
            "I am particularly sensitive to the effects of caffeine.",
            "I am easily overwhelmed by things like bright lights, strong smells, coarse fabrics, or sirens close by."
        ];
    });

})();