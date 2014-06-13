'use strict';

var hsquiz = angular.module('hsQuiz', []);

hsquiz.controller('QuizController', function($location, $anchorScroll, $filter, questionData) {

    this.showResult = false;
    this.displayQuiz = false;
    this.sensitivities = questionData.questions;

    this.startQuiz = function(){

        this.displayQuiz = true;
    };

    this.displayResults = function(){

        this.showResult = true;
        this.scrollToTop();
    };

    this.numQsChecked = function() {

        return $filter('filter')(this.sensitivities, {resonates:true}).length;
    };

    this.resetQuiz = function(){

        //hide the display area
        this.showResult = false;
        this.displayQuiz = false;

        //reset the checkboxes
        for(var i in this.sensitivities) {
            this.sensitivities[i].resonates = false;
        }

        this.scrollToTop();
    };

    //scroll to the top of the page
    this.scrollToTop = function() {

        $location.hash('top-of-quiz');
        $anchorScroll();

        //$('html').scrollTop();
    }

});

hsquiz.directive("hsQuestion", function() {
    return {
        restrict: "E",
        template: '<input id="question{{$index+1}}" type="checkbox" ng-model="statement.resonates"><label for="question{{$index+1}}">{{statement.question}}</label>'
    }
});