// ============================================================
//  페이지 전체 내용은 이 파일 하나만 고치면 됩니다.
//  - 이미지는 public/images/ 폴더에 넣고 파일명만 적으세요. (예: 'hero.jpg')
//  - 이미지를 비워두면('') 기본 배경색으로 표시됩니다.
//  - 배열 항목을 추가/삭제하면 화면에도 그대로 늘어나고 줄어듭니다.
// ============================================================

export const site = {
  title: '함께할 멤버를 모집합니다',
  logo: '', // 'logo.png' 처럼 넣으면 글자 대신 로고 이미지 표시
  logoText: 'RECRUIT',
  themeColor: '#4f46e5', // 버튼·강조색
  applyUrl: 'https://forms.gle/', // 지원하기 버튼 링크 (구글폼 등)
  applyLabel: '지원하기',
}

export const hero = {
  image: 'hero.svg', // 메인 배경 이미지
  badge: '2026 상반기 모집',
  title: '우리와 함께\n성장할 사람을 찾습니다',
  subtitle: '한 줄 소개 문구를 여기에 적어주세요.',
}

export const about = {
  title: '우리는 이런 팀이에요',
  body: '팀/단체 소개 문단을 여기에 적어주세요. 무엇을 하는 곳인지, 어떤 사람들이 모여 있는지 간단히 소개합니다.',
  image: '', // 소개 옆에 들어갈 이미지
}

export const benefits = {
  title: '함께하면 좋은 점',
  items: [
    { icon: '🚀', title: '혜택 1', desc: '혜택 설명을 적어주세요.' },
    { icon: '🤝', title: '혜택 2', desc: '혜택 설명을 적어주세요.' },
    { icon: '🎁', title: '혜택 3', desc: '혜택 설명을 적어주세요.' },
  ],
}

export const positions = {
  title: '모집 분야',
  items: [
    { name: '분야 A', count: '0명', desc: '하는 일, 자격 요건 등' },
    { name: '분야 B', count: '0명', desc: '하는 일, 자격 요건 등' },
  ],
}

export const schedule = {
  title: '진행 일정',
  items: [
    { step: '서류 접수', date: '00.00 ~ 00.00' },
    { step: '면접', date: '00.00' },
    { step: '최종 발표', date: '00.00' },
  ],
}

export const faq = {
  title: '자주 묻는 질문',
  items: [
    { q: '질문 1?', a: '답변 1' },
    { q: '질문 2?', a: '답변 2' },
  ],
}

export const footer = {
  contact: '문의: contact@example.com',
  copyright: '© 2026 RECRUIT',
}
