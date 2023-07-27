/* eslint-disable react-native/no-color-literals */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {JokeType, listJoke} from '../../model/contants';
import {scale} from '../../ultils';
import DefaultJoke from '../../components/DefaultJoke';
import Loading from '../../components/Loading';
import GripData from '../../components/GripData';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

function Home(): JSX.Element {
  const [jokeList, setJokeList] = useState(listJoke);
  const [jokeView, setJokeView] = useState(listJoke[0]);
  const [loading, setLoading] = useState(false);
  const [gripView, setGripView] = useState(listJoke);

  const disableBtn =
    jokeList?.length > 0 && jokeList.every(x => x.isRead === true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await AsyncStorage.getItem('listJoke')
        .then(data => {
          if (data) {
            setLoading(false);
            setGripView(JSON.parse(data));
          }
        })
        .catch(error => {
          throw console.error(error);
        });
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  async function loadNextJoke(id: number) {
    const jokeToSet = jokeList.find(joke => joke.id === id);
    if (jokeToSet) {
      jokeToSet.isRead = true;

      setJokeList([...jokeList.filter(joke => joke.id !== id), jokeToSet]);

      const foundJokes = listJoke.filter(joke => joke.id === id + 1);
      AsyncStorage.setItem('listJoke', JSON.stringify(jokeList));

      if (foundJokes.length > 0) {
        setJokeView(foundJokes[0]);
      } else {
        throw console.error('loi');
      }
    }

    try {
      setLoading(true);
      setTimeout(async () => {
        const jokeItem = await AsyncStorage.getItem('listJoke');
        setLoading(false);
      }, 1000);
    } catch (e) {
      /* empty */
    }
  }

  async function voteJoke(id: number) {
    const jokeToSet: JokeType = jokeList.find(joke => joke.id === id)!;

    if (jokeToSet) {
      jokeToSet.like = true;
      jokeToSet.isRead = true;
      const newJokeList = jokeList
        .filter(joke => joke.id !== id)
        .concat(jokeToSet);

      setJokeList(newJokeList);
      const foundJokes = listJoke.filter(joke => joke.id === id + 1);
      if (foundJokes.length > 0) {
        setJokeView(foundJokes[0]);
      } else {
        // Xử lý trường hợp không tìm thấy phần tử thoả mãn điều kiện
        throw console.error('het truyen roi');
      }
      AsyncStorage.setItem('listJoke', JSON.stringify(newJokeList));
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Banner />
        <View style={styles.container}>
          <View style={styles.viewJoke}>
            {loading ? (
              <Loading />
            ) : (
              <>
                {!disableBtn ? (
                  <Text style={styles.joke}>{jokeView?.joke}</Text>
                ) : (
                  <DefaultJoke />
                )}
              </>
            )}
          </View>

          <View style={styles.btnSection}>
            <TouchableOpacity
              disabled={disableBtn || loading}
              onPress={() => voteJoke(jokeView?.id)}
              style={styles.btnLike}>
              <Text style={styles.btnTitle}>
                Bạn thích câu chuyện này chứ ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={disableBtn || loading}
              onPress={() => loadNextJoke(jokeView?.id)}
              style={styles.btnReadMore}>
              <Text style={styles.btnTitle}>Tải câu chuyện cười tiếp theo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnLike: {backgroundColor: '#D3F3FF', width: scale(150)},
  btnReadMore: {backgroundColor: '#FAC863', width: scale(150)},
  btnSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(20),
  },
  btnTitle: {
    marginHorizontal: scale(10),
    marginVertical: scale(10),
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
  },
  joke: {
    fontSize: 20,
    margin: scale(20),
    textAlign: 'center',
  },
  viewJoke: {
    borderColor: 'gray',
    borderRadius: scale(8),
    borderWidth: 1,
    height: scale(300),
    marginBottom: scale(20),
    marginHorizontal: scale(20),
    marginTop: scale(20),
  },
});

export default Home;
