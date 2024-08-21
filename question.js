
//array of questions
const quiz = [
{
    q:'The minimum sample size for liquid asphalt material is 1 qt for asphalt binder and 1 qt for emulsified asphalt?',
    options:['True','False'],
    answer: 0
},
{
    q:'One of the containers for liquid asphalt materials (not emulsified asphalt) are?',
    options:['Plastic wide-mouth jars','Double-seal friction-top cans','clean cardboard box','5 gallon bucket (no top)'],
    answer: 1,
    img: 'images/can.png'
},
{
    q:'A Double-seal friction-top can is used to sample what type of material?',
    options:['aggregates','emulsions','asphalt binder','soils'],
    answer: 2,
},
{
    q:'What kind of material does a technician use a wide mouth jar to sample?',
    options:['aggregates','None of the above','subbase','emulsified asphalt'],
    answer: 3
},
{
    q:'A sample container for liquid Asphalt material can be cleaned with solvents?',
    options:['True','False'],
    answer: 1
},
{
    q:'Emulsified asphalt samples are to be protected from...?',
    options:['None of the above','Overheating','Freezing','Fire'],
    answer: 3
},
{
    q:'Can you sample emulsified asphalt under pressure?',
    options:['True','False'],
    answer: 1,
},
{
    q:'Are the sampling locations indicated in this image of an aggregate or asphalt mixture stockpile correct?',
    options:['True','False'],
    answer: 0,
    img: 'images/stockpile.png'
},
{
    q:'When sampling a windrow of asphalt mixture remove approximately ______ foot from the top of the windrow',
    options:['4','2','1','3'],
    answer: 2,
},
{
    q:'Are the sampling locations indicated in this image of an aggregate or asphalt mixture stockpile correct?',
    options:['True','False'],
    answer: 1,
    img: 'images/stockpile1.png'
},
{
    q:'Sample Containers for sampling Asphalt Materials should be thoroughly cleaned with a solvent before use?',
    options:['True','False'],
    answer: 1,
},
{
    q:'When performing T272 One Point Method for Determining Maximum Dry Density & Optimum moisture moisture content must be within ____ to ______ of optimum moisture of the reference curve?',
    options:['60%, 90%','50%, 90%','80%, 100%','50%, 100%'],
    answer: 2,
},
{
    q:'During the one point proctor procedure you can use the max dry density and optimum moisture when the one point falls on the curve or within ______ of the curve at the one point moisture content?',
    options:['+-2.0lb/ft3','+-2.5lb/ft3','+-3.0lb/ft3','NONE OF THESE'],
    answer: 0,
},
{
    q:'Choose the image of the "Cookie Cutter" device that is utilized to sample asphalt mixtures?',
    options:['<img src="images/emulsion.png">','<img src="images/shovel.png">','<img src="images/cookie.png">'],
    answer: 2,
},
{
    q:'When sampling asphaltic mixtures with the plate method the steel plate should be placed atleast _______ infront of the paver?',
    options:['Do not use the plate method','5ft','10ft','15ft'],
    answer: 2,
},
{
    q:'What is the above sampling container used to sample?',
    options:['emulsions','asphalt binder','aggregates','soil'],
    answer: 0,
    img: 'images/emulsion.png'
},
{
    q:'You calculate the volume of the test hole to the nearest _________?',
    options:['1cm3 (0.0001ft3)','5cm3 (0.0005ft3)','4cm3 (0.0004ft3)','0.1grams'],
    answer: 0,
},

{
    q:'Which one is the Calcium Carbide Pressure Moisture Tester?',
    options:['<img src="images/emulsion.png">','<img src="images/speed.png">','<img src="images/shovel.png">'],
    answer: 1,
},

{
    q:'When using the nuclear density gauge other radioactive sources must not be within ______ of the gauge when in operation?',
    options:['30ft','20ft','10ft','None of the above.'],
    answer: 0
},
{
    q:'When using the nuclear density gauge large objects must be at least ______ away?',
    options:['5ft','3ft','10ft','30ft'],
    answer: 2
   
},
{
    q:'In the procedure R76 Reducing Samples of Aggregate to Testing Size what method is used for Fine Aggregate drier than SSD?',
    options:['METHOD A & METHOD C','METHOD C','METHOD A & METHOD B','METHOD A'],
    answer: 3
},
{
    q:'In the procedure R76 Reducing Samples of Aggregate to Testing Size what method is used for Fine Aggregate WETTER than SSD and the sample is less than 5000grams?',
    options:['METHOD B & METHOD C','ONLY METHOD B','METHOD D','METHOD A'],
    answer: 0
},
{
    q:'In the procedure R76 Reducing Samples of Aggregate to Testing Size what method is used for COARSE Aggregate?',
    options:['METHOD B (Sections 10.1.3) & METHOD C','ONLY METHOD C','METHOD D','METHOD A & METHOD B (Sections 10.1.1 or 10.1.2)'],
    answer: 3
},
{
    q:'In the procedure R76 Reducing Samples of Aggregate to Testing Size what method is used for COARSE & FINE Aggregate combined drier than SSD?',
    options:['METHOD B (Sections 10.1.3) & METHOD C','METHOD A & METHOD B (Sections 10.1.1 or 10.1.2)','METHOD D','METHOD C'],
    answer: 1
},
{
    q:'When reducing samples per Method A-Mechanical Splitter does the image show a splitter for what type of aggregate?',
    options:['Fine aggregate','This is not a splitter','coarse aggregate'],
    answer: 2,
     img: 'images/coarsesplitter.png'
},
{
    q:'How many scoops of calcium carbide do you use when performing the speedie moisture test with a 20 to 26 gram tester?',
    options:['3','2','5','4'],
    answer: 0
},
{
    q:'The calcium carbide can come into direct contact with water?',
    options:['True','False'],
    answer: 1
},
{
    q:'Transfering samples of emulsion and binder from one container to another should be avoided when possible?',
    options:['True','False'],
    answer: 0
    },
{
    q:'What procedure is this piece of equipment used for?',
    options:['AASHTO T217','AASHTO R97','AASHTO T272','AASHTO R90'],
    answer: 2,
    img: 'images/mold.png'
},
{
    q:'It is okay to have construction equipment operating in the immediate vicinity of the sand cone test.',
    options:['True','False'],
    answer: 1
},
{
        q:'How many Grams of Soil should be used for the average Calcium Carbide Moisture Tester?',
        options:['15grams','20grams','50grams;','None of the Above'],
        answer: 1
},
{
       q:'Which piece of equipment below is utilized to standardize a nuclear gauge?',
        options:['<img src="images/newblocks.png">','<img src="images/plate.png">','<img src="images/box.png">'],
        answer: 0
},
{
    q:'What procedure is this piece of equipment used for?',
    options:['AASHTO T217','AASHTO R97','AASHTO T272','AASHTO R90'],
    answer: 2,
    img: 'images/mold.png'
},
{
    q:'If after performing the Speedie Moisture Test the sample is not completely pulverized it is okay to take the reading?',
    options:['True','False'],
    answer: 1
},
{
        q:'When performing the Speedie Moisture Test shaking should continue for ______ for granular material and upt to ________ for other soil types?',
        options:['None of the Above','10seconds, 30seconds','30seconds, 60seconds','60seconds, 180seconds'],
        answer: 3
},
{
       q:'Which image represents the quartering template from R76 Method B?',
        options:['<img src="images/quarter.png">','<img src="images/plate.png">','<img src="images/shovel.png">'],
        answer: 1
},
{
    q:'One-Point determinations are made by compacting soil using procedure ______?',
    options:['AASHTO T217','AASHTO R67','AASHTO T99','AASHTO T191'],
    answer: 2,
},
{
    q:'When performing the correction of Maximum Dry Density & Optimum Moisture For Oversized Particles for material retained on ______ use Method A & Method B?',
    options:['#10','#4','#16','#50'],
    answer: 1
},
{
        q:'Standardization of Nuclear Gauges on the reference standard is required every ______?',
        options:['None of the Above','Week','Month','Day'],
        answer: 3
},
{
       q:'When sampling from the pad created by the front loader the loader must enter the stockpile with the bucket atleast _____ from the ground?',
        options:['2ft','1ft','4ft','Against the ground'],
        answer: 1
},
]
