import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveForms } from './reactive-forms/reactive-forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ReactiveForms],
  templateUrl: `./app.html`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('This is my app!');

  my_name = 'Harsh';

  person = {
    name: 'Harsh',
    age: 21
  };

  persons = [
    {
        "id": 1780,
        "name": "Art and AI",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to the meeting point of Art and Artificial Intelligence, and you will get to know the common visual art forms, and the use of deep learning in Art.</p>",
        "order": 1,
        "locked": false,
        "passed": true
    },
    {
        "id": 1781,
        "name": "Art Classification",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to classification of visual art pieces using convolutional neural networks, going through all the steps of building a machine learning model.</p>",
        "order": 2,
        "locked": false,
        "passed": true
    },
    {
        "id": 1782,
        "name": "Image Colorization",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to the image colorization, which is adding colors to black and white images using transfer learning and convolutional neural networks.</p>",
        "order": 3,
        "locked": false,
        "passed": true
    },
    {
        "id": 1827,
        "name": "Generative AI",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to&nbsp;Generative AI&nbsp;that can create new content such as text, images, audio, video, or code.</p>",
        "order": 4,
        "locked": false,
        "passed": true
    },
    {
        "id": 1829,
        "name": "Labeling Images",
        "description": "<p dir=\"ltr\">In this submodule, you will learn about labeling images for machine learning model training.</p>",
        "order": 5,
        "locked": false,
        "passed": true
    },
    {
        "id": 1830,
        "name": "Segmentation",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to&nbsp;&nbsp;segmentation techniques for analyzing images effectively.</p>",
        "order": 6,
        "locked": false,
        "passed": true
    },
    {
        "id": 1831,
        "name": "Structured Query Language(SQL)",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to SQL for efficient database management and querying.</p>",
        "order": 7,
        "locked": false,
        "passed": true
    },
    {
        "id": 1832,
        "name": "ARIMA",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to ARIMA for time series forecasting and analysis.</p>",
        "order": 8,
        "locked": false,
        "passed": true
    },
    {
        "id": 1833,
        "name": "Time Series Forecasting",
        "description": "<p dir=\"ltr\">In this submodule, you will be introduced to&nbsp;time series forecasting methods based on historical data patterns.</p>",
        "order": 9,
        "locked": false,
        "passed": true
    },
    {
        "id": 1784,
        "name": "Module Assessment",
        "description": "",
        "order": 10,
        "locked": false,
        "passed": true
    }
]
}