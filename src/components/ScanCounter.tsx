import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';


interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
  onSuspend: () => void;
  isActive: boolean;
  onDemo: () => void;
  showDemo: boolean;
}


export const ScanCounter: React.FC<ScanCounterProps> = ({
  count,
  onScan,
  onReset,
  onSuspend,
  isActive,
  onDemo,
  showDemo,
}) => {
  return (
    <View style={styles.container}>


      <Text style={styles.title}>
        Campus Gate Verification Log
      </Text>


      <View style={styles.counterDisplay}>
        <Text style={styles.label}>
          Today's Gate Entries:
        </Text>


        <Text style={styles.value}>
          {count}
        </Text>
      </View>


      <View style={styles.btnRow}>
        <Pressable
          style={styles.btnPrimary}
          onPress={onScan}
        >
          <Text style={styles.btnText}>
            +1 Scan at Gate
          </Text>
        </Pressable>


        <Pressable
          style={styles.btnSecondary}
          onPress={onReset}
        >
          <Text style={styles.btnSecText}>
            Reset Scans
          </Text>
        </Pressable>
      </View>


      <Pressable
        style={[
          styles.suspendButton,
          isActive
            ? styles.suspendButtonActive
            : styles.reactivateButton,
        ]}
        onPress={onSuspend}
      >
        <Text
          style={[
            styles.suspendText,
            isActive
              ? styles.suspendTextActive
              : styles.reactivateText,
          ]}
        >
          {isActive
            ? '⚠️ Simulate Pass Suspension'
            : '✅ Reactivate Student Pass'}
        </Text>
      </Pressable>


      <Pressable
        style={styles.demoButton}
        onPress={onDemo}
      >
        <Text style={styles.demoButtonText}>
          {showDemo
            ? 'Hide Peer Component Demo'
            : 'Show Peer Demo'}
        </Text>
      </Pressable>


    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 15,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#D9E2E7',


    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },


  title: {
    fontSize: 14,
    fontWeight: '800',
    color: '#172B35',
    marginBottom: 12,
  },


  counterDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F3F6F8',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E0E5E8',
  },


  label: {
    fontSize: 12,
    color: '#52636B',
    fontWeight: '600',
  },


  value: {
    fontSize: 24,
    fontWeight: '800',
    color: '#087F98',
  },


  btnRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },


  btnPrimary: {
    flex: 1,
    backgroundColor: '#087F98',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },


  btnSecondary: {
    flex: 1,
    backgroundColor: '#E5EAF0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },


  btnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },


  btnSecText: {
    color: '#37474F',
    fontSize: 12,
    fontWeight: '700',
  },


  suspendButton: {
    marginTop: 12,
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },


  suspendButtonActive: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },


  reactivateButton: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#86EFAC',
  },


  suspendText: {
    fontSize: 12,
    fontWeight: '700',
  },


  suspendTextActive: {
    color: '#92400E',
  },


  reactivateText: {
    color: '#166534',
  },


  demoButton: {
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E5E8',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },


  demoButtonText: {
    color: '#087F98',
    fontSize: 12,
    fontWeight: '700',
  },
});
