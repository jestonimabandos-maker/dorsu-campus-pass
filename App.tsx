import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import { StudentCard } from './src/components/StutdentCard';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentProfile } from './src/types/Student';

const student: StudentProfile = {
  name: 'JESTONI B. MABANDOS',
  idNumber: '2023-2413-MT',
  program: 'BS Information Technology (BSIT)',
  yearLevel: '3rd Year – Section F',
  avatarUrl: require('./assets/profilepicture.png'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

const peerStudent: StudentProfile = {
  name: 'JONHROI M. UMBOKAN',
  idNumber: '2024-2289-MT',
  program: 'BS Information Technology (BSIT)',
  yearLevel: '3rd Year – Section F',
  avatarUrl: require('./assets/picture.png'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [isActive, setIsActive] = useState(true);
  const [scanCount, setScanCount] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const handleScan = () => {
    setScanCount(current => current + 1);
  };

  const handleReset = () => {
    setScanCount(0);
  };

  const handleSuspend = () => {
    setIsActive(current => !current);
  };

  const handleDemo = () => {
    setShowDemo(current => !current);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.university}>
          DAVAO ORIENTAL STATE UNIVERSITY
        </Text>

        <Text style={styles.faculty}>
          FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY
        </Text>

        <View style={styles.passLabel}>
          <Text style={styles.passLabelText}>
            OFFICIAL STUDENT DIGITAL PASS • AY 2026-2027
          </Text>
        </View>
      </View>

      <StudentCard
        student={student}
        isActive={isActive}
      />

      <ScanCounter
        count={scanCount}
        onScan={handleScan}
        onReset={handleReset}
        onSuspend={handleSuspend}
        isActive={isActive}
        onDemo={handleDemo}
        showDemo={showDemo}
      />

      {showDemo && (
        <StudentCard
          student={peerStudent}
          isActive={true}
          isPeerDemo={true}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 11,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#F3F6F9',
  },

  header: {
    backgroundColor: '#087F96',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#F6A800',
  },

  university: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
  },

  faculty: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
  },

  passLabel: {
    backgroundColor: '#05677D',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 12,
  },

  passLabelText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
});
