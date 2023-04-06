
import React from 'react';
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Flex, Box, Text, Icon, VStack, HStack } from 'native-base';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import server from '../common/server';
import { useAppDispatch } from '../stores/hooks';
import { API, COLORS } from '../common/constants';
import { useNavigation } from '@react-navigation/native';

export default function QuizzModal() {
  const dispatch = useAppDispatch();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [loggedAnswers, setLoggedAnswers] = useState({});
  const [points, setPoints] = useState(0);
  const navigation = useNavigation();

  const fetchQuizzQuestions = async () => {
    const resp = await server.get(API.quizzQuestions, { dispatch });
    setQuestions(resp.data);
  }
  
  const addActionPoints = async () => {
    const resp = await server.post(API.points, { points, origin: 'quiz' }, { dispatch });
    if (resp.status === 201) {
      navigation.navigate('CompletionModal',  { points })
    }
  }
  
  useEffect(() => {
    fetchQuizzQuestions();
  }, []);
  
  const currentQuestion = questions?.[currentQuestionIdx] || {};
  const currentAnswer = loggedAnswers?.[currentQuestion._id];
  const questionAnswered = Number.isFinite(currentAnswer);
  const isLastQuestion = currentQuestionIdx === questions.length - 1;
  const selectedOption = currentQuestion?.answerOptions?.[currentAnswer];
  return (
    <Flex padding="32px 16px" backgroundColor="#41bb7b" height="100%" alignItems="center">
      <Box backgroundColor={COLORS.white} style={styles.box} borderColor="#15AA5A" borderStyle="solid" borderWidth="2" width="68px">
        <Text>{`${currentQuestionIdx + 1}/${ questions.length}`}</Text>
      </Box>
      <Box backgroundColor={COLORS.white} style={styles.box} justifyContent="center" justifyItems="center" padding="16px" height="200px" width="100%" >
        { !questionAnswered && <Text style={styles.title} textAlign="center">{currentQuestion.description}</Text>}
        { questionAnswered && <Text style={styles.title} textAlign="center">{selectedOption.feedback}</Text>}
      </Box>
      <Box marginTop="24px" width="100%">
        {currentQuestion?.answerOptions?.map((option, idx) => {
          const selectedCorrectAnswer = currentAnswer === idx && option.correct;
          const highlightOption = (questionAnswered && option.correct) || currentAnswer === idx;
          const color = highlightOption ? (selectedCorrectAnswer || option.correct) ? "#003619" : "#FF642F" : COLORS.white;
          return (
            <Pressable key={idx} onPress={() => {
              if(!questionAnswered) {
                const newAnswers = {...loggedAnswers, [currentQuestion._id]: idx };
                setLoggedAnswers(newAnswers);
                if (option.correct) {
                  setPoints(points + Number(currentQuestion.points.$numberDecimal));
                }
              }
            }}>
              <Box width="100%" marginBottom="16px" padding="16px" style={styles.box} backgroundColor={color}>
                <Text color={highlightOption ? COLORS.white : questionAnswered ? COLORS.gray1 : COLORS.black} fontWeight="bold">{option.value}</Text>
              </Box>
            </Pressable>
          )
        })}
      </Box>
      <Pressable onPress={() => {
        if(questionAnswered && currentQuestionIdx < questions.length - 1) {
          setCurrentQuestionIdx(currentQuestionIdx + 1)
        }
        if(questionAnswered && isLastQuestion) {
          addActionPoints();
        }
      }}>
        <HStack alignItems="center" justifyContent="center"  marginTop="16px">
          <Text fontSize="16px" color={questionAnswered ? COLORS.darkGreen : '#cecece'} marginRight="8px" textDecorationLine="undeline">{isLastQuestion ? 'Finish' : 'Next'}</Text>
          <Icon as={<MaterialIcons name="arrow-forward" />} size={4} color={questionAnswered ? COLORS.black : '#cecece'} />
        </HStack>
      </Pressable>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    background: "#FFFFFF",
    border: "1px solid #A1A5AC",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
    borderRadius: 12,
  },
});
