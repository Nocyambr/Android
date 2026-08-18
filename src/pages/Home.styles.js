import { StyleSheet } from 'react-native';

import { colors } from '../theme/colors';

export const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.canvas,
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 28,
  },
  content: {
    alignSelf: 'center',
    maxWidth: 760,
    paddingHorizontal: 20,
    paddingTop: 10,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  identity: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    minWidth: 0,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.navy,
    borderRadius: 15,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  greetingBlock: {
    flex: 1,
    marginLeft: 12,
    minWidth: 0,
  },
  greeting: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: '800',
  },
  greetingCaption: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3,
  },
  logoutButton: {
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    marginLeft: 10,
    paddingHorizontal: 13,
    paddingVertical: 9,
  },
  logoutButtonPressed: {
    backgroundColor: '#E9EDF3',
  },
  logoutText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  courseCard: {
    backgroundColor: colors.navy,
    borderRadius: 24,
    elevation: 3,
    overflow: 'hidden',
    padding: 22,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
  },
  courseTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coursePill: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  coursePillText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  courseLevel: {
    color: '#AEB9CC',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  courseTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    letterSpacing: -0.7,
    lineHeight: 32,
    marginTop: 24,
  },
  courseSchedule: {
    color: '#B9C3D5',
    fontSize: 13,
    marginTop: 9,
  },
  progressBlock: {
    marginTop: 28,
  },
  progressLabels: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabel: {
    color: '#C8D0DD',
    fontSize: 11,
    fontWeight: '600',
  },
  progressValue: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  progressTrack: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 999,
    height: 7,
    marginTop: 9,
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: '#F35A63',
    borderRadius: 999,
    height: '100%',
  },
  section: {
    marginTop: 28,
  },
  sectionHeader: {
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  sectionMeta: {
    color: colors.muted,
    fontSize: 11,
  },
  conceptsGrid: {
    gap: 11,
  },
  conceptCard: {
    backgroundColor: colors.surface,
    borderColor: '#E8ECF2',
    borderRadius: 17,
    borderWidth: 1,
    padding: 17,
  },
  conceptNumber: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  conceptTitle: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '800',
    marginTop: 8,
  },
  conceptDescription: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },
  checklistCard: {
    backgroundColor: colors.surface,
    borderColor: '#E8ECF2',
    borderRadius: 18,
    borderWidth: 1,
    overflow: 'hidden',
  },
  checklistItem: {
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 76,
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  checklistItemBorder: {
    borderBottomColor: '#EDF0F4',
    borderBottomWidth: 1,
  },
  checklistItemPressed: {
    backgroundColor: '#F7F9FB',
  },
  checkbox: {
    alignItems: 'center',
    borderColor: '#BAC3D0',
    borderRadius: 8,
    borderWidth: 1.5,
    height: 26,
    justifyContent: 'center',
    width: 26,
  },
  checkboxCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 18,
  },
  checklistCopy: {
    flex: 1,
    marginLeft: 13,
    minWidth: 0,
  },
  checklistTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '700',
  },
  checklistTitleCompleted: {
    color: colors.muted,
    textDecorationLine: 'line-through',
  },
  checklistDescription: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 4,
  },
  footerText: {
    color: colors.subtle,
    fontSize: 11,
    marginTop: 26,
    textAlign: 'center',
  },
});
