/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

module.exports = {
    "grilled cheese": {
        "ingredients": {
            "bread": "2 slices",
            "cheese": "one slice",
            "butter": "1 teaspoon"
        },
        "steps": [{
            "text": "Butter each slice of bread.",
            "ingredients": ["bread", "butter"]
        },{
            "text": "Place the cheese between the two slices of bread, with the butter sides facing out.",
            "ingredients": ["cheese"]
        }, {
            "text": "Fry the sandwich on medium, 1 minute on each side, or until cheese has melted and bread is golden brown.",
            "ingredients": []
        }]
    },
    "peanut butter and jelly": {
        "ingredients": {
            "bread": "2 slices",
            "peanut butter": "2 tablespoons",
            "jelly": "1 tablespoon"
        },
        "steps": [{
            "text": "Spread the peanut butter on one piece of bread.",
            "ingredients": ["bread", "peanut butter"]
        },{
            "text": "Spread the jelly on the other slice of bread.",
            "ingredients": ["bread", "jelly"]
        }, {
            "text": "Put the sandwich together and cut diagonally.",
            "ingredients": []           
        }]
    },
    "salad": {
        "ingredients": {
            "tomato": "2 medium",
            "cucumber": "1 regular",
            "balsamic vinegar": "2 teaspoons",
            "olive oil": "1 tablespoon",
            "salt": "1 pinch"
        },
        "steps": [{
            "text": "Dice tomatoes.",
            "ingredients": ["tomato"]
        },{
            "text": "Dice cucumbe.r",
            "ingredients": ["cucumber"]
        }, {
            "text": "Combine tomato and cucumber.",
            "ingredients": []           
        }, {
            "text": "Add balsamic vineger, olive oil, and salt on top",
            "ingredients": ["balsamic vinegar", "olive oil", "salt"]
        }]
    }
};
