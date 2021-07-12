import React from "react";
import FlipCard from "./CardFlip";
import Style from "./ActivityChild.module.css";
import cn from "classnames";
import globalS from "../../../Assets/Global-Styles/bootstrap.min.module.css";

function ActivityChild() {
  return (<div>
    <div className={cn(Style.container)}>
      <div className={cn(globalS["row"])}>
        <div className={cn(Style.imgs, globalS["col-lg"], )}>
          <div className={cn(Style.imgo,)}>
            <FlipCard img="https://drive.google.com/uc?id=1W5V8YKO2aUC3kPoR4_lKXusPB7vX5UrA" 
            head="Mission Smile & Christmas Activities"
            p="Mission Smile is a winter Project where RSVI spreads smiles on face of destitutes on Christmas until New Year by distributing free gifts."
            
            />
          </div>
          <div className={cn(Style.imge,Style.bg2 )}>
            <FlipCard  img="https://drive.google.com/uc?id=1iEX_hDuyOF9_Mk6O9rFPXtQhUuxVZr3i "
             head="Awareness Workshops and Visits"
             p="RSVI organises various Awareness Workshops – to create awareness in people about disability and about RSVI's programmes. RSVI organises visits to various re-creational places like Malls, Zoo, Botanical garden, educational trips etc. for overall development. "

             />
          </div>
        </div>
        <div className={cn(Style.imgs, globalS["col-lg"], )}>
          <div className={cn(Style.imge,Style.text )}>
            <FlipCard img="https://drive.google.com/uc?id=1s9W6lEdpa-c__HH6J5bI2ca0JsS2YErx" 
             head="Tree Plantation"
             p="RSVI conducts Tree plantation drive with its students annually so as to create awareness in them about importance of Tree Plantation and environment "
            />
          </div>
          <div className={cn(Style.imgo, )}>
            <FlipCard  img="https://drive.google.com/uc?id=1cqsfVz-TH3Uza8NW3SmjNPojcV5cGdQe" 
            head="Yoga and Exercise Classes"
            p="RSVI organises Exercise & Yoga classes to make Physically & Mentally strong."

            />
          </div>
        </div>
        <div className={cn(Style.imgs, globalS["col-lg"], )}>
          <div className={cn(Style.imgo, )}>
            <FlipCard img="https://drive.google.com/uc?id=1B3ErRt6kELQsO2O_jIJ2kGrQbcqqCgWS"
             
             head="Exhibition"
             
             p="RSVI organises exhibition and displays various hand-made products of Visually Impaired. "

             />
          </div>
          <div className={cn(Style.imge,Style.text )}>
            <FlipCard  img="https://drive.google.com/uc?id=1naDmHZJ-0ebkiGtoVwXM7EcoBFGtaIzc" 
            head="Blood Donation"
            p="RSVI organises blood donation Camps and its employees participate in it with enthusiasm amd zeal. It’s an initiative where RSVI aims at educating the society with importance of Blood Donation. "

            />
          </div>
        </div>
        <div className={cn(Style.imgs, globalS["col-lg"],)}>
          <div className={cn(Style.imge,Style.text )}>
            <FlipCard img="https://drive.google.com/uc?id=1saelqU-3qeYOHMRcnxh9YdpD5TtDxb57" 
            head="Fashion Show"
            p="RSVI aims at  Fasion doesn’t need a vision On this note RSVI organises various Fasion shows for its students so that they can prove that beauty doesnt need a vision. It needs passion. "
            />
          </div>
          <div className={cn(Style.imgo, )}>
            <FlipCard  img="https://drive.google.com/uc?id=1_Djx0WA6doq0VXHo9xIyC1czMnkIs1g8" 
            head="Marathon"
            p="RSVI participates in annual Marathon with its Visually Impaired students which is held in Lucknow. This makes sure our studenst are not less than any one in any aspect. "
           
            />
          </div>
        </div>
        <div className={cn(Style.imgs, globalS["col-lg"], )}>
          <div className={cn(Style.imgo,)}>
            <FlipCard img="https://drive.google.com/uc?id=1RP9ZCN0orRGkCVhXPpFZpub-dAL_65Js" 
            head="Games & Entertainment Activities"
            p="RSVI organises Outdoor and Indoor activities for Visually Impaired for their overall personality development. "

            />
          </div>
          <div className={cn(Style.imge,Style.text )}>
            <FlipCard  img="https://drive.google.com/uc?id=19cHbpiDgB1eyrzlYuzRlX0a8KkS3bWmq" 
            head="Advocacy and Marriage "
            p="RSVI gives its extended support to the Visually Impaired community in form of various advocacy services and also organising marriages for them in its possible capacity."
            />
          </div>
        </div>
        {/* <div className={cn(Style.imgs, globalS["col-lg"])}>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text3"/>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text4"/>
        </div>
        <div className={cn(Style.imgs, globalS["col-lg"])}>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text5"/>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text6"/>
        </div>
        <div className={cn(Style.imgs, globalS["col-lg"])}>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text7"/>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text8"/>
        </div>
        <div className={cn(Style.imgs, globalS["col-lg"])}>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text9"/>
          <FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" p="Text10"/>
        </div> */}
        {/* <div className={cn(Style.imgs, globalS["col-lg-1"])}>
          
        </div> */}
        {/* <div className="col-lg-2 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity2" p="Text2"/></div> */}
        {/* <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity3" p="Text3"/></div>
        <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity4" p="Text4"/></div>
        <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity5" p="Text5"/></div>
        <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity6" p="Text6"/></div>
        <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity7" p="Text7"/></div>
        <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity8" p="Text8"/></div>
        <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity9" p="Text9"/></div>
        <div className="col-lg-1 imgs"><FlipCard img="https://drive.google.com/uc?id=1u81uXxWs8N2bEHe-cbQJKu5SM4j6PXNq" head="Activity10" p="Text10"/></div> */}
      </div>
    </div>
  </div>);
}

export default ActivityChild;
