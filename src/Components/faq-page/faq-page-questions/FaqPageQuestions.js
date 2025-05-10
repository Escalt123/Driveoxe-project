import React, { useEffect } from "react";

import Question from "../question/Question";

import "./style.css";

const FaqPageQuestions = () => {

    useEffect(() => {
        const QuestionsLists = document.querySelectorAll('.Questions-list')

        QuestionsLists.forEach(item => {
            const titleItem = item.querySelector('.Questions-listItem-title')
            const textItem = item.querySelector('.Questions-listItem-text')
            const arrowImg = item.querySelector('.ArrowImgQuestion')

            titleItem.addEventListener('click', () => {

                if (textItem.style.visibility === 'hidden') {
                    arrowImg.style.transform = 'rotate(180deg)';
                    arrowImg.style.filter = 'invert(1)';

                    item.style.height = '112px';
                    item.style.backgroundColor = '#FD3B3B';

                    titleItem.style.color = '#FFFFFF';
                    textItem.style.color = '#FFFFFF';

                    setTimeout(() => {
                        textItem.style.visibility = "visible";
                        textItem.style.opacity = "1";
                    }, 500)

                } else {
                    arrowImg.style.transform = 'unset';
                    arrowImg.style.filter = 'unset';

                    item.style.height = '64px';
                    item.style.backgroundColor = '#F8F8F8';

                    titleItem.style.color = '#222222';
                    textItem.style.color = '#222222';

                    setTimeout(() => {
                        textItem.style.visibility = "hidden";
                        textItem.style.opacity = "0";
                    }, 100)
                }
            })
        })
    })




    return (
        <div className="FaqPageQuestions-cont">

            <div className="FaqPageQuestions-list">

                <div className="FaqPageQuestions-card">
                    <p className="FaqPageQuestions-ItemTitle">Booking and Reservations</p>

                    <Question QuestionID={1} />
                    <Question QuestionID={2} />
                    <Question QuestionID={3} />
                    <Question QuestionID={4} />
                    <Question QuestionID={5} />
                </div>

                <div className="FaqPageQuestions-card">
                    <p className="FaqPageQuestions-ItemTitle">Car Pickup and Return</p>

                    <Question QuestionID={6} />
                    <Question QuestionID={7} />
                    <Question QuestionID={8} />
                    <Question QuestionID={9} />
                    <Question QuestionID={10} />
                </div>

                <div className="FaqPageQuestions-card">
                    <p className="FaqPageQuestions-ItemTitle">Payment and Billing</p>
                    <Question QuestionID={11} />
                    <Question QuestionID={12} />
                    <Question QuestionID={13} />
                    <Question QuestionID={14} />
                    <Question QuestionID={15} />
                </div>

                <div className="FaqPageQuestions-card">
                    <p className="FaqPageQuestions-ItemTitle">Additional Services</p>
                    <Question QuestionID={16} />
                    <Question QuestionID={17} />
                    <Question QuestionID={18} />
                    <Question QuestionID={19} />
                    <Question QuestionID={20} />
                </div>

            </div>

            <div className="FaqFooter-hold">
                <div className="FaqFooter-cont">

                    <div className="FaqFooter-BackgroundCar">
                        <div className="FaqFooter-Title-cont">
                            <p className="FaqFooter-BigTitle">
                                Still Have Questions?
                            </p>

                            <p className="FaqFooter-SmallTitle">
                                CONTACT US FOR ASSISTANCE
                            </p>

                            <button className="FaqFooter-btn">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default FaqPageQuestions;