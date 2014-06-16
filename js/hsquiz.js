'use strict';

var hsquiz = angular.module('hsQuiz', []);

hsquiz.controller('QuizController', function($filter, questionData) {

    this.showResult = false;
    this.displayQuiz = false;
    this.sensitivities = questionData.questions;

    // pagination variables (turn into it's own controller later?)
    this.currentPage = 0;
    this.qsPerPage = 6;

    this.numberOfPages = function() {
        return Math.ceil(this.sensitivities.length/this.qsPerPage);
    };

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

        this.currentPage = 0;

        this.scrollToTop();
    };

    //scroll to the top of the page
    this.scrollToTop = function() {

        $('html, body').scrollTop('0px');
    }

});

hsquiz.directive("hsQuestion", function() {
    return {
        restrict: "E",
        template: '<input id="question{{$index+1}}" type="checkbox" ng-model="statement.resonates"><label for="question{{$index+1}}">{{statement.question}}</label>'
    }
});

hsquiz.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});