import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs,where, query, addDoc } from 'firebase/firestore';
import { styles } from '../style';
const Home =(props)=>{
    const [testNum, setTestNum] = useState(); //테스트 num DB
    const [studentId, setStudentId] = useState(""); //불러온 studentId


    const ReviewDB = async ()=>{
        const studentId = props.route.params.student; //login성공- 얻은 학생 아이디 
        try{
            const q = await query( collection(db, "Test"), where('state',"==", "true"))
            const ReadTest = await getDocs(q);
            let ChoiceTest;

            //활성화된 test확인
            ReadTest.docs.map((row, idx) =>{
                setTestNum(row.data().testId) //최종 test DB 저장 
                ChoiceTest = row.data().testId;
            })
              
            props.navigation.navigate("ReviewNote" ,{
                studentId: studentId,
                testId: ChoiceTest
            })
        }catch(error){ console.log(error.message)}

    }
    //Test의 state상태가 true인 test를 찾아 저장하기
    const TestDB = async ()=>{  
        const studentId = props.route.params.student; //login성공- 얻은 학생 아이디 
        const finishState = props.route.params.finish; //test 여부
        const test = props.route.params.testId; //시험이 완료된 시험 아이디

        let ChoiceTest;
        try{
            const q = await query( collection(db, "Test"), where('state',"==", "true"))
            const ReadTest = await getDocs(q);
            //활성화된 test확인
            ReadTest.docs.map((row, idx) =>{~
                setTestNum(row.data().testId) //최종 test DB 저장 
                ChoiceTest = row.data().testId;
            })

            if(testNum==test && finishState==true){
                alert("You already finish test");
            }else{
                //학생 답안지 생성
                await addDoc(collection(db, "AnswerStudent"), {
                    st_id: studentId,
                    testId: ChoiceTest,
                    score: 0,
                    markState: false,
                    q1_A: false,
                    q1_B: false,
                    q1_C: false,
                    q2_A: false,
                    q2_B: false,
                    q2_C: false,
                    q3_A: false,
                    q3_B: false,
                    q3_C: false,
                    firstAnswer: "-",
                    secondAnswer: "-",
                    thirdAnswer: "-",
                    q1_A_p1: "-",
                    q1_A_p2: "-",
                    q1_A_p3: "-",
                    q1_A_p4: "-",
                    q1_A_p5: "-",
                    q1_B_p1: "-",
                    q1_B_p2: "-",
                    q1_B_p3: "-",
                    q1_B_p4: "-",
                    q1_C_p1: "-",
                    q1_C_p2: "-",
                    q1_C_p3: "-",
                    q1_C_p4: "-",
                    q2_A_p1: "-",
                    q2_A_p2: "-",
                    q2_A_p3: "-",
                    q2_A_p4: "-",
                    q2_A_p5: "-",
                    q2_B_p1: "-",
                    q2_B_p2: "-",
                    q2_B_p3: "-",
                    q2_B_p4: "-",
                    q2_C_p1: "-",
                    q2_C_p2: "-",
                    q2_C_p3: "-",
                    q2_C_p4: "-",
                    q3_A_p1: "-",
                    q3_A_p2: "-",
                    q3_A_p3: "-",
                    q3_A_p4: "-",
                    q3_A_p5: "-",
                    q3_B_p1: "-",
                    q3_B_p2: "-",
                    q3_B_p3: "-",
                    q3_B_p4: "-",
                    q3_C_p1: "-",
                    q3_C_p2: "-",
                    q3_C_p3: "-",
                    q3_C_p4: "-",
                });
                alert("Create AnswerPaper")
                props.navigation.navigate("StartTest" ,{
                    studentId: studentId,
                    testId: ChoiceTest,
                    Count: 3
                })
            }

            
        }catch(error){ console.log(error.message)}
    }
    return(
        <ImageBackground style={styles.image} source={require("../images/QuestionScreen.png")} resizeMode="cover">
        <View style={styles.mainView}>
            <TouchableOpacity style={styles.button} onPress={TestDB}>
                <Text style={styles.buttonText}>Start Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ReviewDB}>
                <Text style={styles.buttonText}>Check Score</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
}

export default Home;
