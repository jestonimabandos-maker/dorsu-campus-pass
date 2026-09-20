import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile, StatusBadgeProps } from '../types/Student';


interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
  isPeerDemo?: boolean;
}


export const StatusBadge: React.FC<StatusBadgeProps> = ({
  isActive,
}) => {
  return (
    <View
      style={[
        styles.badge,
        isActive ? styles.active : styles.suspended,
      ]}
    >
      <Text
        style={[
          styles.statusText,
          isActive ? styles.activeText : styles.suspendedText,
        ]}
      >
        {isActive
          ? '● STATUS: VERIFIED ACTIVE PASS'
          : '● STATUS: ACCESS TEMPORARILY SUSPENDED'}
      </Text>
    </View>
  );
};


export const StudentCard: React.FC<StudentCardProps> = ({
  student,
  isActive,
  isPeerDemo = false,
}) => {
  return (
    <View style={isPeerDemo ? styles.peerCard : styles.card}>


      {isPeerDemo && (
        <Text style={styles.peerTitle}>
          PEER PROPS DEMO:
        </Text>
      )}


      <View style={styles.topRow}>
        <Image
          source={student.avatarUrl}
          style={isPeerDemo ? styles.peerAvatar : styles.avatar}
        />


        <View style={styles.details}>
          <Text style={isPeerDemo ? styles.peerName : styles.name}>
            {student.name}
          </Text>


          <Text style={isPeerDemo ? styles.peerIdNumber : styles.idNumber}>
            ID: {student.idNumber}
          </Text>


          <Text style={isPeerDemo ? styles.peerProgram : styles.program}>
            {student.program}
          </Text>


          <Text style={isPeerDemo ? styles.peerYearLevel : styles.yearLevel}>
            {student.yearLevel}
          </Text>
        </View>
      </View>


      <StatusBadge isActive={isActive} />


      {!isPeerDemo && (
        <Text style={styles.campus}>
          Campus: {student.campus}
        </Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({


  // MAIN STUDENT CARD


  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginTop: 34,
    borderWidth: 1,
    borderColor: '#D9E2E7',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },


  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#E5E7EB',
    borderWidth: 2,
    borderColor: '#087F98',
  },


  details: {
    flex: 1,
    marginLeft: 16,
  },


  name: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172B35',
    marginBottom: 5,
  },


  idNumber: {
    fontSize: 13,
    color: '#087F98',
    fontWeight: '700',
    marginBottom: 4,
  },


  program: {
    fontSize: 13,
    color: '#52636B',
    marginBottom: 4,
  },


  yearLevel: {
    fontSize: 13,
    color: '#52636B',
  },


  campus: {
    fontSize: 11,
    color: '#7A8790',
    marginTop: 12,
    textAlign: 'center',
    fontWeight: '500',
  },


  // STATUS BADGE


  badge: {
    marginTop: 18,
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },


  active: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#86EFAC',
  },


  suspended: {
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },


  statusText: {
    fontSize: 11,
    fontWeight: '800',
    textAlign: 'center',
  },


  activeText: {
    color: '#166534',
  },


  suspendedText: {
    color: '#B91C1C',
  },


  // PEER PROPS DEMO CARD


  peerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#D9E2E7',
    borderTopWidth: 2,
    borderTopColor: '#087F98',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },


  peerTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#087F98',
    marginBottom: 8,
  },


  peerAvatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#E5E7EB',
    borderWidth: 2,
    borderColor: '#087F98',
  },


  peerName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#172B35',
    marginBottom: 3,
  },


  peerIdNumber: {
    fontSize: 11,
    color: '#087F98',
    fontWeight: '700',
    marginBottom: 3,
  },


  peerProgram: {
    fontSize: 11,
    color: '#52636B',
    marginBottom: 3,
  },


  peerYearLevel: {
    fontSize: 11,
    color: '#7A8790',
  },
});
