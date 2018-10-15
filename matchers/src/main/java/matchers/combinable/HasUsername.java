package matchers.combinable;

import model.User;
import org.hamcrest.Description;
import org.hamcrest.Matcher;
import org.hamcrest.TypeSafeMatcher;

public class HasUsername {

    public static Matcher<User> isEqual(final String expectedName) {
    return new TypeSafeMatcher<User>() {
        @Override
        protected boolean matchesSafely(User actualUser) {
            return actualUser.getName().equals(expectedName);
        }

        public void describeTo(Description description) {
            {
                description.appendText(expectedName);
            }
        }

    };
}
}
