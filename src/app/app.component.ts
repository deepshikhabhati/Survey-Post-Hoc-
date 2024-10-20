import { Component, OnInit, ElementRef } from '@angular/core';
import { data1 } from 'src/assets/data1';
import { paperData } from 'src/assets/data';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bubble Chart with Lines';


isHovered: boolean[] = [];
selectedOne: any = {};

isExpanded = false;  // To track whether the keyword box is expanded or collapsed

// Function to toggle the keyword box
chartValues: any = [];
listOfData: any = [];
selectedKeys: any = []
chartdata: any = paperData;
activeTab: string = ''; // Default active tab

keywordCounts: any = [
  {
      "key": "interpretability",
      "count": 5
  },
  {
      "key": "Interpretability",
      "count": 5
  },
  {
      "key": "explainable AI",
      "count": 4
  },
  {
      "key": "medical imaging",
      "count": 4
  },
  {
      "key": "XAI",
      "count": 3
  },
  {
      "key": "machine learning",
      "count": 3
  },
  {
      "key": "explainability",
      "count": 3
  },
  {
      "key": "Deep learning",
      "count": 3
  },
  {
      "key": "Explainable Artificial Intelligence",
      "count": 2
  },
  {
      "key": "Machine Learning",
      "count": 2
  },
  {
      "key": "Deep Learning",
      "count": 2
  },
  {
      "key": "Transparency",
      "count": 2
  },
  {
      "key": "deep learning",
      "count": 2
  },
  {
      "key": "transparency",
      "count": 2
  },
  {
      "key": "explainable artificial intelligence",
      "count": 2
  },
  {
      "key": "radiomics",
      "count": 2
  },
  {
      "key": "Explainable artificial intelligence",
      "count": 2
  },
  {
      "key": "Survey",
      "count": 2
  },
  {
      "key": "Interpretable AI",
      "count": 2
  },
  {
      "key": "Supervised learning",
      "count": 2
  },
  {
      "key": "Neural networks",
      "count": 2
  },
  {
      "key": "Machine learning",
      "count": 2
  },
  {
      "key": "Convolutional neural networks",
      "count": 2
  },
  {
      "key": "fairness",
      "count": 1
  },
  {
      "key": "sensitivity",
      "count": 1
  },
  {
      "key": "black-box",
      "count": 1
  },
  {
      "key": "Data Fusion",
      "count": 1
  },
  {
      "key": "Comprehensibility",
      "count": 1
  },
  {
      "key": "Privacy",
      "count": 1
  },
  {
      "key": "Fairness",
      "count": 1
  },
  {
      "key": "Accountability",
      "count": 1
  },
  {
      "key": "Responsible Artificial Intelligence",
      "count": 1
  },
  {
      "key": "Artificial Intelligence",
      "count": 1
  },
  {
      "key": "healthcare",
      "count": 1
  },
  {
      "key": "interpretable deep learning",
      "count": 1
  },
  {
      "key": "computer vision",
      "count": 1
  },
  {
      "key": "neural network",
      "count": 1
  },
  {
      "key": "taxonomy",
      "count": 1
  },
  {
      "key": "meta-analysis",
      "count": 1
  },
  {
      "key": "deep neural networks",
      "count": 1
  },
  {
      "key": "clinical decision support systems",
      "count": 1
  },
  {
      "key": "Interpretable deep learning",
      "count": 1
  },
  {
      "key": "Medical image analysis",
      "count": 1
  },
  {
      "key": "Blackbox",
      "count": 1
  },
  {
      "key": "Features",
      "count": 1
  },
  {
      "key": "Predictive models",
      "count": 1
  },
  {
      "key": "Diagnostic imaging",
      "count": 1
  },
  {
      "key": "Backpropagation",
      "count": 1
  },
  {
      "key": "Medical information system",
      "count": 1
  },
  {
      "key": "Convolutional Neural Network (CNN)",
      "count": 1
  },
  {
      "key": "Informatics",
      "count": 1
  },
  {
      "key": "Radiomics",
      "count": 1
  },
  {
      "key": "Technology Assessment",
      "count": 1
  },
  {
      "key": "Activation heatmaps",
      "count": 1
  },
  {
      "key": "Architecture understanding",
      "count": 1
  },
  {
      "key": "Black-box representations",
      "count": 1
  },
  {
      "key": "CNN visualisation",
      "count": 1
  },
  {
      "key": "Explainable AI",
      "count": 1
  },
  {
      "key": "Feature visualisation",
      "count": 1
  },
  {
      "key": "Interpretable neural networks",
      "count": 1
  },
  {
      "key": "Saliency maps",
      "count": 1
  },
  {
      "key": "Explainable AI (XAI)",
      "count": 1
  },
  {
      "key": "Black-box",
      "count": 1
  },
  {
      "key": "Meta-survey",
      "count": 1
  },
  {
      "key": "Responsible AI",
      "count": 1
  },
  {
      "key": "Unsupervised learning",
      "count": 1
  },
  {
      "key": "Image representation learning",
      "count": 1
  },
  {
      "key": "Self-supervised learning",
      "count": 1
  },
  {
      "key": "Feature transfer",
      "count": 1
  },
  {
      "key": "Remote sensing",
      "count": 1
  },
  {
      "key": "Semantic segmentation",
      "count": 1
  },
  {
      "key": "Computer Vision",
      "count": 1
  },
  {
      "key": "Convolutional Neural Network",
      "count": 1
  },
  {
      "key": "Class Activation Maps",
      "count": 1
  },
  {
      "key": "Explainable deep learning",
      "count": 1
  },
  {
      "key": "LRP",
      "count": 1
  },
  {
      "key": "Discriminative saliency maps",
      "count": 1
  },
  {
      "key": "Image classification",
      "count": 1
  },
  {
      "key": "Attribution",
      "count": 1
  },
  {
      "key": "Multi-Modal",
      "count": 1
  },
  {
      "key": "Model Understanding",
      "count": 1
  },
  {
      "key": "adversarial attack",
      "count": 1
  },
  {
      "key": "explainable machine learning",
      "count": 1
  },
  {
      "key": "Medical diagnostic imaging",
      "count": 1
  },
  {
      "key": "Solid modeling",
      "count": 1
  },
  {
      "key": "Computational modeling",
      "count": 1
  },
  {
      "key": "Medical services",
      "count": 1
  },
  {
      "key": "Data visualization",
      "count": 1
  },
  {
      "key": "Data models",
      "count": 1
  },
  {
      "key": "Training",
      "count": 1
  },
  {
      "key": "Deep learning interpretability",
      "count": 1
  },
  {
      "key": "visual analytics",
      "count": 1
  },
  {
      "key": "scalable summarization",
      "count": 1
  },
  {
      "key": "neuron clustering",
      "count": 1
  },
  {
      "key": "neuron embedding",
      "count": 1
  }
];

  value = data1

  constructor() {
   
    // console.log(this.chartdata,22)
  }

  ngOnInit() {

    this.isHovered = new Array(this.chartdata.length).fill(false);

    this.selectedOne = this.chartdata[0];

    this.listOfData = this.chartdata;


    let bib: any = []

    this.value.split("Bibtex:").forEach((value: any,i: any) => {
      let arr =  value.split('Citation')[0];

      if(i !== 0) {
        this.chartdata[i-1].bibTexContent = arr.split('Abstract:')[0]
      }

      bib.push(arr.split('Abstract:')[0])
    })



    console.log(this.chartdata,bib,406)
  }   

  onHover(index: number) {
    this.isHovered[index] = true; // Set hover state to true when mouse enters
  }

  onLeave(index: number) {
    this.isHovered[index] = false; // Set hover state to false when mouse leaves
  }

  getKeys(obj: any): any {
    return Object.entries(obj)
    .map(([key, count]) => ({ key, count })) // Convert to array of objects
    .sort((a: any, b: any) => b.count - a.count); // Sort by count descending

  }

  // Function to change the active tab
selectTab(tab: string): void {
  if(tab === this.activeTab) {
   this.activeTab = ''
  } else {
    this.activeTab = tab;
  }
}

  selectedKeyword(keyword: any): any {

    if(this.selectedKeys.indexOf(keyword) === -1) {
      
    this.selectedKeys.push(keyword);
    this.listOfData =  this.listOfData.filter((item: any) => 
      this.selectedKeys.some((keyword: any) => item.keywords && item.keywords.includes(keyword))
    );
  } else {
    this.selectedKeys = this.selectedKeys.filter((item: any) => item !== keyword);
    if(this.selectedKeys.length) {
      this.listOfData =  this.chartdata.filter((item: any) => 
        this.selectedKeys.some((keyword: any) => item.keywords && item.keywords.includes(keyword))
      );
    } else {
      this.listOfData =  this.chartdata;
    }

    this.selectedOne = this.listOfData[0];

  }
  
    console.log(this.listOfData);
    
  }

  toggleKeywords(): void {
    this.isExpanded = !this.isExpanded;
  }

  chartEdit(data: any): any {
console.log(data)
  if(data) {
     this.listOfData =  this.chartdata.filter((item: any) => item.bibtex.year === data.year && item.groupName === data.group);
     this.selectedOne = this.listOfData[0];
  }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 31); // 31 is used because Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
  }

  }

