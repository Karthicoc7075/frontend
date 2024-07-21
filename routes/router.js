import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts';
import  {getAuthSelector} from '../features/auth/selectors/authSelector'
import { useSelector } from 'react-redux';

export const IndexPage = lazy(() => import('../pages/dashboard/dashboard'));
export const ClassPage = lazy(() => import('../pages/class/ViewClass.js'));
export const CreateClassPage = lazy(() => import('../pages/class/createClass'));
export const ManageClassPage = lazy(() => import('../pages/class/manageClass'));
export const CreateClassSubjectPage = lazy(() => import('../pages/class/createClassSubject'));
export const UpdateClassPage = lazy(() => import('../pages/class/updateClass'))
export const SubjectPage = lazy(() => import('../pages/subject/subject'))
export const CreateSubjectPage = lazy(() => import('../pages/subject/createSubject'))
export const UpdateSubjectPage = lazy(() => import('../pages/subject/updateSubject'))
export const MaterialPage = lazy(() => import('../pages/material/material'))
export const CreateMaterialPage = lazy(() => import('../pages/material/createMaterial'))
export const UpdateMaterialPage = lazy(() => import('../pages/material/updateMaterial'))
export const MediumPage = lazy(() => import('../pages/medium/medium'))
export const CreateMediumPage = lazy(() => import('../pages/medium/createMedium'))
export const UpdateMediumPage = lazy(() => import('../pages/medium/updateMedium'))
export const CategoryPage = lazy(() => import('../pages/category/category.js'))
export const CreateCategoryPage = lazy(() => import('../pages/category/createCategory'))
export const UpdateCategoryPage = lazy(() => import('../pages/category/updateCategory'))
export const LanguagePage = lazy(() => import('../pages/language/language'))
export const CreateLanguagePage = lazy(() => import('../pages/language/createLanguage'))
export const UpdateLanguagePage = lazy(() => import('../pages/language/updateLanguage'))
export const NewsPage = lazy(() => import('../pages/news/news'))
export const CreateNewsPage = lazy(() => import('../pages/news/createNews'))
export const UpdateNewsPage = lazy(() => import('../pages/news/updateNews'))
export const SliderPage = lazy(() => import('../pages/slider/slider'))
export const CreateSliderPage = lazy(() => import('../pages/slider/createSlider'))
export const UpdateSliderPage = lazy(() => import('../pages/slider/updateSlider'))
export const ReviewPage = lazy(() => import('../pages/review/review'))
export const SupportPage = lazy(() => import('../pages/support/support'))
export const ReportPage = lazy(() => import('../pages/report/report'))
export const Page404 = lazy(() => import('../pages/page-not-found/index'))
export const NotificationPage = lazy(() => import('../pages/notification/notification'))
export const CreateNotificationPage = lazy(() => import('../pages/notification/createNotification'))
export const VersionPage = lazy(() => import('../pages/version/version.js'))
export const CreateVersionPage = lazy(() => import('../pages/version/createVersion.js'))
export const UpdateVersionPage = lazy(() => import('../pages/version/updateVersion.js'))
export const SettingPage = lazy(() => import('../pages/setting/setting.js'))
export const UserPage = lazy(() => import('../pages/user/user.js'))
export const CreateUserPage = lazy(() => import('../pages/user/createUser.js'))
// export const BlogPage = lazy(() => import('src/pages/blog'));
// export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('../pages/login/login'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
// export const Page404 = lazy(() => import('src/pages/page-not-found'));






// ----------------------------------------------------------------------
export default function Router() {
  const auth = useSelector(getAuthSelector);
  const isAuthenticated = () => {
    if(auth.token && auth.isAuthenticated && auth.user){
      return true
    }
    return false
  }

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element:<ProtectedRoute><IndexPage /></ProtectedRoute>, index: true },
        { path: 'class', element: <ProtectedRoute><ClassPage /></ProtectedRoute> },
        { path: 'class/create', element: <ProtectedRoute><CreateClassPage /></ProtectedRoute> },
        { path: 'class/update/:classId', element: <ProtectedRoute><UpdateClassPage /></ProtectedRoute> },
        { path: 'class/manage-class/:classId', element: <ProtectedRoute><ManageClassPage /></ProtectedRoute> },
        { path: 'class/:classId/subject/create', element: <ProtectedRoute><CreateClassSubjectPage /></ProtectedRoute> },
        { path: 'subject', element: <ProtectedRoute><SubjectPage /></ProtectedRoute> },
        { path: 'subject/create', element: <ProtectedRoute><CreateSubjectPage /></ProtectedRoute> },
        { path: 'subject/update/:subjectId', element: <ProtectedRoute><UpdateSubjectPage /></ProtectedRoute> },
        { path: 'material', element: <ProtectedRoute><MaterialPage /></ProtectedRoute> },
        { path: 'material/create', element: <ProtectedRoute><CreateMaterialPage /></ProtectedRoute> },
        { path: 'material/update/:materialId', element: <ProtectedRoute><UpdateMaterialPage /></ProtectedRoute> },
        { path: 'medium', element: <ProtectedRoute><MediumPage /></ProtectedRoute> },
        { path: 'medium/create', element: <ProtectedRoute><CreateMediumPage /></ProtectedRoute> },
        { path: 'medium/update/:mediumId', element: <ProtectedRoute><UpdateMediumPage /></ProtectedRoute> },
        { path: 'category', element: <ProtectedRoute><CategoryPage /></ProtectedRoute> },
        { path: 'category/create', element: <ProtectedRoute><CreateCategoryPage /></ProtectedRoute> },
        { path: 'category/update/:categoryId', element: <ProtectedRoute><UpdateCategoryPage /></ProtectedRoute> },
        { path: 'language', element: <ProtectedRoute><LanguagePage /></ProtectedRoute> },
        { path: 'language/create', element: <ProtectedRoute><CreateLanguagePage /></ProtectedRoute> },
        { path: 'language/update/:languageId', element: <ProtectedRoute><UpdateLanguagePage /></ProtectedRoute> },
        { path: 'news', element: <ProtectedRoute><NewsPage /></ProtectedRoute> },
        { path: 'news/create', element: <ProtectedRoute><CreateNewsPage /></ProtectedRoute> },
        { path: 'news/update/:newsId', element: <ProtectedRoute><UpdateNewsPage /></ProtectedRoute> },
        { path: 'slider', element: <ProtectedRoute><SliderPage /></ProtectedRoute> },
        { path: 'slider/create', element: <ProtectedRoute><CreateSliderPage /></ProtectedRoute> },
        { path: 'slider/update/:sliderId', element: <ProtectedRoute><UpdateSliderPage /></ProtectedRoute> },
        { path: 'review', element: <ProtectedRoute><ReviewPage /></ProtectedRoute> },
        { path: 'support', element: <ProtectedRoute><SupportPage /></ProtectedRoute> },
        { path: 'report', element: <ProtectedRoute><ReportPage /></ProtectedRoute> },
        { path: 'notification', element: <ProtectedRoute><NotificationPage /></ProtectedRoute> },
        { path: 'notification/create', element: <ProtectedRoute><CreateNotificationPage /></ProtectedRoute> },
        { path: 'version', element: <ProtectedRoute><VersionPage /></ProtectedRoute> },
        { path: 'version/create', element: <ProtectedRoute><ProtectedRoute><CreateVersionPage /></ProtectedRoute></ProtectedRoute> },
        { path: 'version/update/:versionId', element: <ProtectedRoute><ProtectedRoute><UpdateVersionPage /></ProtectedRoute></ProtectedRoute>},
        { path: 'setting', element: <ProtectedRoute><ProtectedRoute><SettingPage /></ProtectedRoute></ProtectedRoute> },
        { path: 'user', element: <ProtectedRoute><ProtectedRoute><UserPage /></ProtectedRoute></ProtectedRoute> },
        { path: 'user/create', element: <ProtectedRoute><ProtectedRoute><CreateUserPage /></ProtectedRoute></ProtectedRoute> },
      ],
    },
    {
      path: 'login',
      element: isAuthenticated() ? <Navigate to="/" /> : <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;

}
