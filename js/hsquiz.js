'use strict';

(function () {

    var hsquiz = angular.module('hsQuiz', []);

    hsquiz.controller('QuizController', function() {

        this.showResult = false;

        this.displayResults = function(){

            this.showResult = true;
        };

        this.resetQuiz = function(){

            this.showResult = false;
        };

        this.sensitivities = [
            {question: "I seem to be aware of subtleties in my environment.", resonates: false},
            {question: "Other people's moods affect me.", resonates: false},
            {question: "I tend to be very sensitive to pain.", resonates: false},
            {question: "I find myself needing to withdraw during busy days, into bed or in a darkened room or any place where I can have some privacy and relief from stimulation.", resonates: false},
            {question: "I am particularly sensitive to the effects of caffeine.", resonates: false},
            {question: "I am easily overwhelmed by things like bright lights, strong smells, coarse fabrics, or sirens close by.", resonates: false},
            {question: "I have a rich, complex inner life.", resonates: false},
            {question: "I am made uncomfortable by loud noises.", resonates: false},
            {question: "I am deeply moved by the arts or music.", resonates: false},
            {question: "I am conscientious.", resonates: false},
            {question: "I startle easily.", resonates: false},
            {question: "I get rattled when I have a lot to do in a short amount of time.", resonates: false},
            {question: "When people are uncomfortable in a physical environment I tend to know what needs to be done to make it more comfortable (like changing the lighting or the seating).", resonates: false},
            {question: "I am annoyed when people try to get me to do too many things at once.", resonates: false},
            {question: "I try hard to avoid making mistakes or forgetting things.", resonates: false},
            {question: "I make it a point to avoid violent movies and TV shows.", resonates: false},
            {question: "I become unpleasantly aroused when a lot is going on around me.", resonates: false},
            {question: "Becoming very hungry creates a strong reaction in me, disrupting my concentration or mood.", resonates: false},
            {question: "Changes in my life shake me up.", resonates: false},
            {question: "I notice and enjoy delicate or fine scents, tastes, sounds, works of art.", resonates: false},
            {question: "I make it a high priority to arrange my life to avoid upsetting or overwhelming situations.", resonates: false},
            {question: "When I must compete or be observed while performing a task, I become so nervous or shaky that I do much worse than I would have otherwise.", resonates: false},
            {question: "When I was a child, my parents or teachers seemed to see me as sensitive or shy.", resonates: false}
        ];
    });

})();